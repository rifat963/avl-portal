import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  author: string;
  publishedAt: string;
  status: "draft" | "published";
  featured: boolean;
};

export type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  affiliation: string;
  email: string;
  office: string;
  bio: string;
  researchInterests: string[];
  education: string[];
  profileUrl: string;
  status: "active" | "alumni";
  sortOrder: number;
};

export type BlogPostInput = Omit<BlogPost, "id" | "featured"> & {
  featured?: boolean;
};

export type TeamMemberInput = Omit<TeamMember, "id" | "researchInterests" | "education"> & {
  researchInterests: string[];
  education: string[];
};

const dbDir = path.join(process.cwd(), "data");
const dbPath = path.join(dbDir, "avl-cms.sqlite");

let db: Database.Database | null = null;

function getDatabase() {
  if (!db) {
    fs.mkdirSync(dbDir, { recursive: true });
    db = new Database(dbPath);
    db.pragma("journal_mode = DELETE");
    db.pragma("foreign_keys = ON");
    migrate(db);
    seed(db);
    normalizePublicContent(db);
  }

  return db;
}

function migrate(database: Database.Database) {
  database.exec(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      body TEXT NOT NULL,
      category TEXT NOT NULL,
      author TEXT NOT NULL,
      published_at TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'draft',
      featured INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS team_members (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      name TEXT NOT NULL,
      role TEXT NOT NULL,
      affiliation TEXT NOT NULL,
      email TEXT NOT NULL,
      office TEXT NOT NULL,
      bio TEXT NOT NULL,
      research_interests TEXT NOT NULL,
      education TEXT NOT NULL,
      profile_url TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'active',
      sort_order INTEGER NOT NULL DEFAULT 100,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

function normalizePublicContent(database: Database.Database) {
  database
    .prepare(
      `UPDATE blog_posts
       SET slug = @slug,
           title = @title,
           excerpt = @excerpt,
           body = @body,
           updated_at = CURRENT_TIMESTAMP
       WHERE slug = 'cms-launch' OR title LIKE '%lightweight CMS%'`
    )
    .run({
      slug: "lab-news-platform",
      title: "Applied Vision Lab expands its academic web presence",
      excerpt:
        "The lab website now provides a clearer home for research updates, team profiles, teaching resources, and student opportunities.",
      body:
        "The Applied Vision Lab portal is being developed as a professional academic group website for sharing research activity, teaching resources, team profiles, and lab announcements with students, collaborators, and the wider research community.",
    });
}

function seed(database: Database.Database) {
  const postCount = database.prepare("SELECT COUNT(*) AS count FROM blog_posts").get() as { count: number };
  const memberCount = database.prepare("SELECT COUNT(*) AS count FROM team_members").get() as { count: number };

  if (postCount.count === 0) {
    const insertPost = database.prepare(`
      INSERT INTO blog_posts
        (slug, title, excerpt, body, category, author, published_at, status, featured)
      VALUES
        (@slug, @title, @excerpt, @body, @category, @author, @publishedAt, @status, @featured)
    `);

    [
      {
        slug: "lab-news-platform",
        title: "Applied Vision Lab expands its academic web presence",
        excerpt:
          "The lab website now provides a clearer home for research updates, team profiles, teaching resources, and student opportunities.",
        body:
          "The Applied Vision Lab portal is being developed as a professional academic group website for sharing research activity, teaching resources, team profiles, and lab announcements with students, collaborators, and the wider research community.",
        category: "Lab News",
        author: "Applied Vision Lab",
        publishedAt: "2026-06-05",
        status: "published",
        featured: 1,
      },
      {
        slug: "research-directions",
        title: "Research directions for vision, BCI, and graph-enhanced AI",
        excerpt:
          "A short overview of the lab's active directions across computer vision, brain-computer interfaces, and knowledge graphs.",
        body:
          "AVL research connects applied computer vision with data-efficient learning, explainable AI, BCI systems, graph neural networks, and structured retrieval-augmented generation. The shared goal is to build systems that are technically strong and useful in local research contexts.",
        category: "Research",
        author: "Dr. Mohammad Rifat Ahmmad Rashid",
        publishedAt: "2026-05-28",
        status: "published",
        featured: 0,
      },
      {
        slug: "student-projects",
        title: "Student project pipeline for applied AI courses",
        excerpt:
          "Course dashboards and lab projects are being connected into a clearer student research pipeline.",
        body:
          "The teaching pages remain focused on course delivery, while the lab news section provides a place to publish project calls, student milestones, and research notes. This creates a practical bridge from coursework to lab involvement.",
        category: "Teaching",
        author: "Applied Vision Lab",
        publishedAt: "2026-05-12",
        status: "published",
        featured: 0,
      },
    ].forEach((post) => insertPost.run(post));
  }

  if (memberCount.count === 0) {
    const insertMember = database.prepare(`
      INSERT INTO team_members
        (slug, name, role, affiliation, email, office, bio, research_interests, education, profile_url, status, sort_order)
      VALUES
        (@slug, @name, @role, @affiliation, @email, @office, @bio, @researchInterests, @education, @profileUrl, @status, @sortOrder)
    `);

    [
      {
        slug: "mohammad-rifat-ahmmad-rashid",
        name: "Dr. Mohammad Rifat Ahmmad Rashid",
        role: "Lab Lead, Associate Professor",
        affiliation: "Department of Computer Science and Engineering, East West University",
        email: "rifat.rashid@ewubd.edu",
        office: "Room #646, Department of CSE, EWU",
        bio:
          "Dr. Rashid leads the Applied Vision Lab, with work spanning computer vision, applied AI, knowledge graphs, brain-computer interfaces, and precision agriculture systems.",
        researchInterests: JSON.stringify([
          "Computer Vision",
          "Applied AI",
          "Knowledge Graphs",
          "Brain-Computer Interfaces",
          "Precision Agriculture AI",
        ]),
        education: JSON.stringify(["Faculty member, Department of CSE, East West University"]),
        profileUrl: "https://rifat963.github.io",
        status: "active",
        sortOrder: 1,
      },
      {
        slug: "raihan-ul-islam",
        name: "Dr. Raihan Ul Islam",
        role: "Associate Professor",
        affiliation: "Department of Computer Science and Engineering, East West University",
        email: "raihan.islam@ewubd.edu",
        office: "Room No. 256, Ext. 411",
        bio:
          "Dr. Raihan Ul Islam works in artificial intelligence, machine learning, IoT, smart city systems, and cloud and edge computing. His experience includes research roles with Ericsson AB and Lulea University of Technology.",
        researchInterests: JSON.stringify([
          "Expert System",
          "Internet of Things",
          "Smart City",
          "Cloud and Edge Computing",
          "Artificial Intelligence",
          "Machine Learning",
        ]),
        education: JSON.stringify([
          "PhD in Pervasive Mobile Computing, Lulea University of Technology, Sweden",
          "MSc in Computer Science and Engineering, Lulea University of Technology, Sweden",
          "BSc in Computer Science and Engineering, Khulna University, Bangladesh",
        ]),
        profileUrl: "https://fse.ewubd.edu/computer-science-engineering/faculty-view/raihan.islam",
        status: "active",
        sortOrder: 2,
      },
    ].forEach((member) => insertMember.run(member));
  }
}

function mapPost(row: Record<string, unknown>): BlogPost {
  return {
    id: Number(row.id),
    slug: String(row.slug),
    title: String(row.title),
    excerpt: String(row.excerpt),
    body: String(row.body),
    category: String(row.category),
    author: String(row.author),
    publishedAt: String(row.published_at),
    status: row.status as BlogPost["status"],
    featured: Boolean(row.featured),
  };
}

function mapMember(row: Record<string, unknown>): TeamMember {
  return {
    id: Number(row.id),
    slug: String(row.slug),
    name: String(row.name),
    role: String(row.role),
    affiliation: String(row.affiliation),
    email: String(row.email),
    office: String(row.office),
    bio: String(row.bio),
    researchInterests: JSON.parse(String(row.research_interests)) as string[],
    education: JSON.parse(String(row.education)) as string[],
    profileUrl: String(row.profile_url),
    status: row.status as TeamMember["status"],
    sortOrder: Number(row.sort_order),
  };
}

export function getPublishedPosts() {
  const rows = getDatabase()
    .prepare(
      `SELECT * FROM blog_posts
       WHERE status = 'published'
       ORDER BY featured DESC, published_at DESC, id DESC`
    )
    .all() as Record<string, unknown>[];

  return rows.map(mapPost);
}

export function getAllPosts() {
  const rows = getDatabase()
    .prepare(
      `SELECT * FROM blog_posts
       ORDER BY published_at DESC, id DESC`
    )
    .all() as Record<string, unknown>[];

  return rows.map(mapPost);
}

export function getPostById(id: number) {
  const row = getDatabase()
    .prepare("SELECT * FROM blog_posts WHERE id = ?")
    .get(id) as Record<string, unknown> | undefined;

  return row ? mapPost(row) : null;
}

export function createPost(input: BlogPostInput) {
  const result = getDatabase()
    .prepare(
      `INSERT INTO blog_posts
        (slug, title, excerpt, body, category, author, published_at, status, featured)
       VALUES
        (@slug, @title, @excerpt, @body, @category, @author, @publishedAt, @status, @featured)`
    )
    .run({
      ...input,
      featured: input.featured ? 1 : 0,
    });

  return Number(result.lastInsertRowid);
}

export function updatePost(id: number, input: BlogPostInput) {
  getDatabase()
    .prepare(
      `UPDATE blog_posts
       SET slug = @slug,
           title = @title,
           excerpt = @excerpt,
           body = @body,
           category = @category,
           author = @author,
           published_at = @publishedAt,
           status = @status,
           featured = @featured,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = @id`
    )
    .run({
      ...input,
      id,
      featured: input.featured ? 1 : 0,
    });
}

export function deletePost(id: number) {
  getDatabase().prepare("DELETE FROM blog_posts WHERE id = ?").run(id);
}

export function getTeamMembers() {
  const rows = getDatabase()
    .prepare(
      `SELECT * FROM team_members
       WHERE status = 'active'
       ORDER BY sort_order ASC, name ASC`
    )
    .all() as Record<string, unknown>[];

  return rows.map(mapMember);
}

export function getAllTeamMembers() {
  const rows = getDatabase()
    .prepare(
      `SELECT * FROM team_members
       ORDER BY sort_order ASC, name ASC`
    )
    .all() as Record<string, unknown>[];

  return rows.map(mapMember);
}

export function getTeamMemberById(id: number) {
  const row = getDatabase()
    .prepare("SELECT * FROM team_members WHERE id = ?")
    .get(id) as Record<string, unknown> | undefined;

  return row ? mapMember(row) : null;
}

export function createTeamMember(input: TeamMemberInput) {
  const result = getDatabase()
    .prepare(
      `INSERT INTO team_members
        (slug, name, role, affiliation, email, office, bio, research_interests, education, profile_url, status, sort_order)
       VALUES
        (@slug, @name, @role, @affiliation, @email, @office, @bio, @researchInterests, @education, @profileUrl, @status, @sortOrder)`
    )
    .run({
      ...input,
      researchInterests: JSON.stringify(input.researchInterests),
      education: JSON.stringify(input.education),
    });

  return Number(result.lastInsertRowid);
}

export function updateTeamMember(id: number, input: TeamMemberInput) {
  getDatabase()
    .prepare(
      `UPDATE team_members
       SET slug = @slug,
           name = @name,
           role = @role,
           affiliation = @affiliation,
           email = @email,
           office = @office,
           bio = @bio,
           research_interests = @researchInterests,
           education = @education,
           profile_url = @profileUrl,
           status = @status,
           sort_order = @sortOrder,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = @id`
    )
    .run({
      ...input,
      id,
      researchInterests: JSON.stringify(input.researchInterests),
      education: JSON.stringify(input.education),
    });
}

export function deleteTeamMember(id: number) {
  getDatabase().prepare("DELETE FROM team_members WHERE id = ?").run(id);
}

export function getCmsStats() {
  const database = getDatabase();
  const posts = database.prepare("SELECT COUNT(*) AS count FROM blog_posts").get() as { count: number };
  const members = database.prepare("SELECT COUNT(*) AS count FROM team_members").get() as { count: number };

  return {
    databasePath: dbPath,
    posts: posts.count,
    teamMembers: members.count,
  };
}
