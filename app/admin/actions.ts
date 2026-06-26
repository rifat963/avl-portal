"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createPost,
  createTeamMember,
  deletePost,
  deleteTeamMember,
  updatePost,
  updateTeamMember,
  type BlogPostInput,
  type TeamMemberInput,
} from "@/lib/cms";

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function optionalSlug(value: string, fallback: string) {
  const source = value || fallback;

  return source
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function list(value: string) {
  return value
    .split(/\r?\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function parsePost(formData: FormData): BlogPostInput {
  const title = text(formData, "title");

  return {
    slug: optionalSlug(text(formData, "slug"), title),
    title,
    excerpt: text(formData, "excerpt"),
    body: text(formData, "body"),
    category: text(formData, "category") || "Lab News",
    author: text(formData, "author") || "Applied Vision Lab",
    publishedAt: text(formData, "publishedAt") || new Date().toISOString().slice(0, 10),
    status: text(formData, "status") === "draft" ? "draft" : "published",
    featured: formData.get("featured") === "on",
  };
}

function parseTeamMember(formData: FormData): TeamMemberInput {
  const name = text(formData, "name");

  return {
    slug: optionalSlug(text(formData, "slug"), name),
    name,
    role: text(formData, "role"),
    affiliation: text(formData, "affiliation"),
    email: text(formData, "email"),
    office: text(formData, "office"),
    bio: text(formData, "bio"),
    researchInterests: list(text(formData, "researchInterests")),
    education: list(text(formData, "education")),
    profileUrl: text(formData, "profileUrl"),
    status: text(formData, "status") === "alumni" ? "alumni" : "active",
    sortOrder: Number(text(formData, "sortOrder")) || 100,
  };
}

function refreshCms() {
  revalidatePath("/admin");
  revalidatePath("/admin/posts");
  revalidatePath("/admin/team");
  revalidatePath("/blog");
  revalidatePath("/team");
}

export async function createPostAction(formData: FormData) {
  const id = createPost(parsePost(formData));
  refreshCms();
  redirect(`/admin/posts/${id}`);
}

export async function updatePostAction(id: number, formData: FormData) {
  updatePost(id, parsePost(formData));
  refreshCms();
  redirect("/admin/posts");
}

export async function deletePostAction(id: number) {
  deletePost(id);
  refreshCms();
  redirect("/admin/posts");
}

export async function createTeamMemberAction(formData: FormData) {
  const id = createTeamMember(parseTeamMember(formData));
  refreshCms();
  redirect(`/admin/team/${id}`);
}

export async function updateTeamMemberAction(id: number, formData: FormData) {
  updateTeamMember(id, parseTeamMember(formData));
  refreshCms();
  redirect("/admin/team");
}

export async function deleteTeamMemberAction(id: number) {
  deleteTeamMember(id);
  refreshCms();
  redirect("/admin/team");
}
