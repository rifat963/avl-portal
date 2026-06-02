export type CourseDashboard = {
  code: string;
  slug: string;
  title: string;
  subtitle: string;
  level: string;
  credits: number;
  contactHours: string;
  repository: string;
  externalDashboard: string;
  description: string;
  stats: { label: string; value: string }[];
  tabs: { id: string; label: string }[];
  modules: {
    id: string;
    title: string;
    weekRange: string;
    description: string;
    lectures: string;
    outcomes: string[];
    tools: string[];
  }[];
  labs: { id: string; title: string; week: string; focus: string }[];
  assessment: { area: string; marks: number; co: string[] }[];
  resources: string[];
  series?: { title: string; description: string; items: string[] }[];
};

export const courseDashboards: CourseDashboard[] = [
  {
    code: "CSE445",
    slug: "cse445",
    title: "Computer Vision",
    subtitle: "Feature detection, geometry, detection, tracking, and modern vision systems",
    level: "Undergraduate",
    credits: 4,
    contactHours: "5 hrs/week x 13 weeks + Final Exam",
    repository: "https://github.com/rifat963/cse445-cv-dashboard",
    externalDashboard: "https://cse445-cv-dashboard.vercel.app",
    description:
      "The full CSE445 dashboard is now represented inside the AVL Portal with course overview, lecture modules, lab manual, outcomes, assessment, tutorials, and resources.",
    stats: [
      { label: "Lectures", value: "24" },
      { label: "Modules", value: "9" },
      { label: "Lab Sessions", value: "10" },
      { label: "Marks", value: "100" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "modules", label: "Modules" },
      { id: "labs", label: "Lab Manual" },
      { id: "assessment", label: "Assessment" },
      { id: "tutorials", label: "Tutorials" },
      { id: "resources", label: "Resources" },
    ],
    modules: [
      {
        id: "M01",
        title: "Introduction to Computer Vision",
        weekRange: "Week 1",
        lectures: "Lectures 1-2",
        description: "Scope, major vision tasks, applications, and the end-to-end vision system pipeline.",
        outcomes: ["Distinguish computer vision from image processing", "Trace a complete vision system pipeline"],
        tools: ["OpenCV", "NumPy", "Matplotlib"],
      },
      {
        id: "M02",
        title: "Feature Detection and Description",
        weekRange: "Weeks 2-3",
        lectures: "Lectures 3-5",
        description: "Harris, FAST, SIFT, SURF, ORB, descriptors, invariance, and matching foundations.",
        outcomes: ["Compare local feature detectors", "Select descriptors for application constraints"],
        tools: ["OpenCV", "NumPy", "Matplotlib"],
      },
      {
        id: "M03",
        title: "Camera Models and Projection Geometry",
        weekRange: "Weeks 3-4",
        lectures: "Lectures 6-8",
        description: "Pinhole camera model, intrinsic/extrinsic parameters, projection matrices, and transformations.",
        outcomes: ["Derive camera projection equations", "Use homogeneous coordinates and rigid transforms"],
        tools: ["NumPy", "OpenCV", "Matplotlib"],
      },
      {
        id: "M04",
        title: "Feature Matching and Geometric Verification",
        weekRange: "Weeks 5-6",
        lectures: "Lectures 9-11",
        description: "Descriptor matching, Lowe ratio test, RANSAC, homography, panorama stitching, and calibration.",
        outcomes: ["Apply robust homography estimation", "Interpret reprojection error"],
        tools: ["OpenCV", "NumPy", "Matplotlib"],
      },
      {
        id: "M05",
        title: "Multiple View Geometry",
        weekRange: "Weeks 6-7",
        lectures: "Lectures 12, 14-15",
        description: "Epipolar geometry, fundamental/essential matrices, stereo rectification, disparity, and depth.",
        outcomes: ["Use epipolar constraints", "Compute disparity and metric depth"],
        tools: ["OpenCV", "NumPy", "SciPy"],
      },
      {
        id: "M06-M10",
        title: "Motion, Detection, Tracking, and Advanced CV",
        weekRange: "Weeks 8-12",
        lectures: "Lectures 16-24",
        description: "Optical flow, object detection, HOG/SVM, Faster R-CNN, YOLO, SORT, DeepSORT, ByteTrack, ViTs, NeRF, SAM, and CLIP.",
        outcomes: ["Analyze motion and tracking systems", "Compare modern recognition and detection pipelines"],
        tools: ["OpenCV", "PyTorch", "Ultralytics", "Open3D"],
      },
    ],
    labs: [
      { id: "L01", title: "Image Representation and Basic Operations", week: "Week 1", focus: "Image I/O, pixels, channels, and array operations" },
      { id: "L02", title: "Feature Detection: Harris and FAST", week: "Week 2", focus: "Corner response, thresholding, and non-max suppression" },
      { id: "L03", title: "SIFT/ORB Feature Extraction and Matching", week: "Week 3", focus: "Descriptors, matching, and ratio test" },
      { id: "L04", title: "Homography and Panorama Stitching", week: "Week 5", focus: "RANSAC, warping, and blending" },
      { id: "L05", title: "Stereo Depth and Disparity", week: "Week 7", focus: "Rectification, block matching, and depth maps" },
      { id: "L06-L10", title: "Detection, Tracking, and Final CV Applications", week: "Weeks 8-12", focus: "Optical flow, HOG, YOLO, tracking, and evaluation" },
    ],
    assessment: [
      { area: "Class Participation", co: ["Other"], marks: 5 },
      { area: "Class Test / Quiz", co: ["Other"], marks: 10 },
      { area: "Midterm Exam", co: ["CO1", "CO2"], marks: 30 },
      { area: "Final Exam", co: ["CO2", "CO3"], marks: 35 },
      { area: "Laboratory Performance & Lab Exam", co: ["CO4"], marks: 10 },
      { area: "Mini Project", co: ["CO4"], marks: 10 },
    ],
    resources: ["Szeliski: Computer Vision", "OpenCV documentation", "PyTorch", "Ultralytics YOLO", "Kaggle notebooks", "COCO and MOT datasets"],
    series: [
      { title: "Object Detection", description: "Detection taxonomy, IoU, NMS, R-CNN family, YOLO, DETR, deployment, and error analysis.", items: ["Detection metrics", "YOLO training", "DETR and transformer detectors"] },
      { title: "Self-Supervised Learning", description: "DINO, I-JEPA, feature distillation, label efficiency, and detection fine-tuning.", items: ["SSL pretraining", "YOLO/RF-DETR comparison", "Feature distillation"] },
      { title: "Tracking", description: "SORT, DeepSORT, ByteTrack, transformer tracking, and MOT metrics.", items: ["Kalman filtering", "Association", "MOTA / IDF1 / HOTA"] },
    ],
  },
  {
    code: "CSE438",
    slug: "cse438",
    title: "Digital Image Processing",
    subtitle: "Image representation, enhancement, filtering, restoration, segmentation, and morphology",
    level: "Undergraduate",
    credits: 4,
    contactHours: "5 hrs/week x 13 weeks + Final Exam",
    repository: "https://github.com/rifat963/cse438-dip-dashboard",
    externalDashboard: "https://cse438-dip-dashboard.vercel.app",
    description:
      "The CSE438 dashboard content is integrated into the AVL Portal with lecture modules, lab manual, segmentation series, SSL notebooks, project guide, assessment, and resources.",
    stats: [
      { label: "Lectures", value: "26" },
      { label: "Modules", value: "6" },
      { label: "Lab Sessions", value: "13" },
      { label: "Marks", value: "100" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "modules", label: "Modules" },
      { id: "labs", label: "Lab Manual" },
      { id: "assessment", label: "Assessment" },
      { id: "series", label: "Series" },
      { id: "resources", label: "Resources" },
    ],
    modules: [
      {
        id: "M01",
        title: "Foundations of Digital Image Processing",
        weekRange: "Weeks 1-2",
        lectures: "Lectures 1-5",
        description: "Digital image representation, image processing pipeline, sampling, quantization, pixel relationships, and distance measures.",
        outcomes: ["Explain the DIP pipeline", "Apply sampling, quantization, and pixel neighborhood concepts"],
        tools: ["NumPy", "OpenCV", "Matplotlib"],
      },
      {
        id: "M02",
        title: "Image Enhancement",
        weekRange: "Weeks 3-4",
        lectures: "Lectures 6-11",
        description: "Point operations, gray-level transformations, contrast stretching, log/gamma transforms, histogram equalization, and matching.",
        outcomes: ["Apply intensity transformations", "Select histogram-based enhancement methods"],
        tools: ["OpenCV", "scikit-image", "Matplotlib"],
      },
      {
        id: "M03",
        title: "Spatial Domain Filtering",
        weekRange: "Weeks 5-6",
        lectures: "Lectures 12-16",
        description: "Convolution, smoothing filters, sharpening filters, derivatives, high-boost filtering, and edge enhancement.",
        outcomes: ["Apply smoothing and sharpening filters", "Compare derivative filters"],
        tools: ["NumPy", "OpenCV", "SciPy"],
      },
      {
        id: "M04",
        title: "Frequency Domain Processing",
        weekRange: "Weeks 7-8",
        lectures: "Lectures 17-20",
        description: "DFT, low-pass/high-pass filters, DCT, wavelets, compression, and Hough transform.",
        outcomes: ["Interpret Fourier magnitude spectra", "Design frequency-domain filters"],
        tools: ["NumPy", "SciPy", "PyWavelets", "OpenCV"],
      },
      {
        id: "M05",
        title: "Image Restoration",
        weekRange: "Weeks 9-10",
        lectures: "Lectures 21-22",
        description: "Image degradation model, noise distributions, mean/order-statistic filtering, inverse filtering, and Wiener filtering.",
        outcomes: ["Model degradation and noise", "Apply restoration filters"],
        tools: ["NumPy", "SciPy", "OpenCV"],
      },
      {
        id: "M06",
        title: "Segmentation and Morphology",
        weekRange: "Weeks 11-12",
        lectures: "Lectures 23-26",
        description: "Edge detection, thresholding, Otsu, adaptive thresholding, region methods, color segmentation, erosion, dilation, opening, and closing.",
        outcomes: ["Implement segmentation methods", "Apply morphological operators"],
        tools: ["OpenCV", "scikit-image", "SciPy"],
      },
    ],
    labs: [
      { id: "L01", title: "Introduction to Image Processing Tools", week: "Week 1", focus: "Python, OpenCV, image I/O, and visualization" },
      { id: "L02", title: "Sampling, Quantization, and Pixel Relationships", week: "Week 2", focus: "Resolution, quantization, adjacency, and distance metrics" },
      { id: "L03", title: "Point Operations and Gray-Level Transformations", week: "Week 3", focus: "Contrast stretching, log, gamma, and intensity slicing" },
      { id: "L04-L08", title: "Filtering, Frequency, and Compression Labs", week: "Weeks 4-8", focus: "Spatial filters, DFT, DCT, wavelets, and Hough transform" },
      { id: "L09-L13", title: "Restoration, Segmentation, Morphology, and Assessment", week: "Weeks 9-13", focus: "Noise models, Wiener filtering, thresholding, morphology, and final lab tasks" },
    ],
    assessment: [
      { area: "Class Participation", co: ["Other"], marks: 5 },
      { area: "Class Test", co: ["Other"], marks: 10 },
      { area: "Midterm Exam", co: ["CO1", "CO2"], marks: 30 },
      { area: "Final Exam", co: ["CO2", "CO3"], marks: 35 },
      { area: "Term Project", co: ["CO4"], marks: 15 },
      { area: "Laboratory Performance & Lab Exam", co: ["CO4"], marks: 5 },
    ],
    resources: ["Gonzalez & Woods: Digital Image Processing", "OpenCV", "scikit-image", "SciPy", "PyWavelets", "Kaggle notebooks"],
    series: [
      { title: "Segmentation Series", description: "Classical segmentation, graph methods, U-Net, transformers, instance and panoptic segmentation.", items: ["Thresholding and region methods", "U-Net and DeepLab", "SAM and modern segmentation"] },
      { title: "SSL Series", description: "Self-supervised visual representation learning for image understanding and segmentation.", items: ["SSL foundations", "Contrastive/generative features", "SSL features for segmentation"] },
      { title: "Term Project", description: "Project workflow for proposal, implementation, report, and presentation.", items: ["Dataset selection", "Method comparison", "Evaluation and documentation"] },
    ],
  },
  {
    code: "AIML505",
    slug: "aiml505",
    title: "Statistics for Data Science",
    subtitle: "Probability, inference, regression, Bayesian methods, time series, and graph learning",
    level: "Graduate",
    credits: 3,
    contactHours: "Graduate course dashboard and topic progression",
    repository: "https://github.com/rifat963/aiml505-course-dashboard",
    externalDashboard: "https://aiml505-course-dashboard.vercel.app",
    description:
      "The AIML505 dashboard is summarized inside the AVL Portal with modules, applied practice themes, assessment structure, and resources.",
    stats: [
      { label: "Lectures", value: "12" },
      { label: "Modules", value: "12" },
      { label: "Credits", value: "3" },
      { label: "Level", value: "Graduate" },
    ],
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "modules", label: "Modules" },
      { id: "assessment", label: "Assessment" },
      { id: "resources", label: "Resources" },
    ],
    modules: [
      {
        id: "M01-M03",
        title: "Probability and Statistical Foundations",
        weekRange: "Early term",
        lectures: "Foundational modules",
        description: "Probability theory, random variables, distributions, estimation, and hypothesis testing.",
        outcomes: ["Model uncertainty", "Apply inference procedures"],
        tools: ["Python", "NumPy", "SciPy"],
      },
      {
        id: "M04-M08",
        title: "Modeling for Data Science",
        weekRange: "Mid term",
        lectures: "Core modeling modules",
        description: "Regression, classification, Bayesian thinking, non-parametric methods, and model evaluation.",
        outcomes: ["Fit and evaluate statistical models", "Explain model assumptions"],
        tools: ["pandas", "scikit-learn", "statsmodels"],
      },
      {
        id: "M09-M12",
        title: "Advanced Topics and Applications",
        weekRange: "Late term",
        lectures: "Applied modules",
        description: "Time series, graph neural networks, applied data science workflows, and mini-project synthesis.",
        outcomes: ["Analyze temporal and graph-structured data", "Design a reproducible applied statistics project"],
        tools: ["PyTorch", "NetworkX", "Jupyter"],
      },
    ],
    labs: [],
    assessment: [
      { area: "Assignments and Exercises", co: ["Practice"], marks: 25 },
      { area: "Midterm / Evaluation", co: ["Theory"], marks: 25 },
      { area: "Project / Case Study", co: ["Application"], marks: 30 },
      { area: "Final Evaluation", co: ["Synthesis"], marks: 20 },
    ],
    resources: ["Python scientific stack", "SciPy", "statsmodels", "scikit-learn", "PyTorch", "Jupyter notebooks"],
  },
];

export function getCourseDashboard(slug: string) {
  return courseDashboards.find((course) => course.slug === slug);
}

export function getCourseSectionHref(course: CourseDashboard, id: string) {
  if (id === "overview") return `/teaching/${course.slug}`;
  if (id === "modules") return `/teaching/${course.slug}/lectures`;
  if (id === "tutorials" || id === "series") return `/teaching/${course.slug}/series`;
  return `/teaching/${course.slug}/${id}`;
}
