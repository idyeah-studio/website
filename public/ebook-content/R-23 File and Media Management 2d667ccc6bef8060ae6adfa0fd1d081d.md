# R-23: File and Media Management

# Recipe #23: File and Media Management

Category: UI & Visuals  |  ⏱️ 35-40 min  |  🌶️🌶️ Intermediate

<aside>
🎯

**USE WHEN:**

You're designing file upload, storage, organization, or media gallery features - handling user uploads (documents, images, videos), browsing file libraries, managing folders, previewing media, or organizing assets. Your current file management UI is confusing, uploads lack feedback, galleries are clunky, or users struggle to find and manage their files.

</aside>

---

<aside>
⚠️

**THE CHALLENGE**

Many designers struggle with file management interfaces - creating confusing upload flows (unclear how to upload, hidden upload buttons, no drag-drop support), poor upload feedback (no progress indication, files fail silently, unclear when upload completes), cluttered file lists (hard to scan, no thumbnails, poor organization), missing preview options (can't preview before downloading, no lightbox for images), unclear file actions (download/delete/share hidden or hard to find), no folder organization (flat file list, can't create folders, no hierarchy), or terrible mobile experience (can't upload from mobile, tiny thumbnails, hard to select files). Teams create file systems with high support tickets, users lose files, galleries are hard to navigate, or uploads fail without clear errors. You need systematic file management design - clear upload patterns (drag-drop, browse, paste with progress feedback), organized views (list, grid, folders with breadcrumbs), preview capabilities (lightbox, quick look, inline preview), accessible file actions (download, delete, rename, share), and mobile optimization (mobile upload, responsive galleries, touch-friendly).

</aside>

---

<aside>
📊

**WHAT TO EXPECT**

The AI will provide multiple upload patterns (prominent drag-drop zones, browse button, paste, mobile camera/gallery access, multi-file batch upload) with comprehensive progress feedback (progress bars, thumbnails, status indicators, error handling, success confirmation), file organization systems (list and grid views with toggles, folder hierarchy with breadcrumbs, search, filters by type/date/size, sorting options), preview capabilities without downloading (image lightbox with zoom and navigation, inline PDF viewer, video player, quick look overlays), clear file actions (download, delete with confirmation, inline rename, share with permissions, move/copy, bulk operations with selection), media gallery patterns (responsive grid layouts, lightbox with keyboard/swipe navigation, slideshow mode), and mobile-optimized interfaces (camera/gallery upload, touch gestures for swipe-to-delete and long-press-to-select, responsive views adapting from desktop to mobile, pull-to-refresh). Optionally includes visual examples of upload flows, file grids, and preview interactions.

</aside>

---

<aside>
🧪

**THE PROMPT BLUEPRINT**

```jsx
Act as a File Management UI Specialist focusing on upload patterns, file organization, media galleries, and asset management interfaces.

I'm designing file and media management for [Product Type] handling [File Types] with features for [User Actions] that need to be intuitive and work seamlessly across devices.

[OPTIONAL: Attach current file management UI with issues]

File management requirements:
- File types: [e.g., Documents (PDF, Word, Excel), Images (JPG, PNG), Videos (MP4), Mixed media]
- Upload methods: [e.g., Drag-drop, Browse button, Paste, URL import, Mobile camera]
- Organization needs: [e.g., Folders, Tags, Search, Filters, Sorting]
- Preview requirements: [e.g., Image lightbox, PDF viewer, Video player, Document preview]
- Actions needed: [e.g., Download, Delete, Rename, Share, Move, Copy, Version history]

Current file management problems:
- [Problem 1: e.g., Hidden upload - users can't find how to upload files, button buried in menu]
- [Problem 2: e.g., No upload progress - files upload silently, users don't know if working or stuck]
- [Problem 3: e.g., No file preview - must download to see content, slow and annoying]
- [Problem 4: e.g., Flat file list - 500 files in one list, no folders, impossible to organize]
- [Problem 5: e.g., No thumbnails - text-only list, can't identify image files visually]

Team context: [User file management frequency, storage limits, mobile usage, common file types]

Please provide:
1. Upload patterns (drag-drop zones, browse button, paste, mobile upload, multi-file)
2. Upload feedback (progress bars, thumbnails, status, errors, success confirmation)
3. File list and grid views (list layout, grid layout, hybrid, when to use which)
4. File organization (folders, breadcrumbs, hierarchy, tags, search, filters)
5. File preview (lightbox for images, PDF viewer, video player, quick look)
6. File actions (download, delete, rename, share, move, bulk actions)
7. Media galleries (image grids, lightbox navigation, slideshow, zoom)
8. Mobile file management (mobile upload from camera/gallery, responsive views, touch actions)

Consider: [Constraints - e.g., Must work on mobile, Support large files, Preview without download, Folder organization, Bulk operations]
```

💡 What to customize:

- [Product Type] = Cloud storage, Project management, CMS, E-commerce, Portfolio
- [File Types] = Documents, images, videos, mixed
- [User Actions] = Upload, organize, preview, share
- [Upload methods] = Drag-drop, browse, paste, camera
- [Organization needs] = Folders, tags, search, filters
- [Problems 1-5] = Current file management issues
- Attach file management UI screenshots
</aside>

---

<aside>
✨

**LIVE EXAMPLE**

```jsx
Act as a File Management UI Specialist focusing on upload patterns, file organization, media galleries, and asset management interfaces.

I'm designing file and media management for a SaaS Project Management Tool handling documents, images, and videos with features for upload, organize, preview, share, and collaborate that need to be intuitive and work seamlessly across devices.

[User would attach current file management UI showing hidden upload, no progress, flat list, no previews]

File management requirements:
- File types:
  - Documents: PDF, Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Text files
  - Images: JPG, PNG, GIF, SVG (up to 10MB each)
  - Videos: MP4, MOV (up to 500MB each)
  - Archives: ZIP files
  - Mixed: Users upload all types to project folders
- Upload methods:
  - Drag-drop: Primary method (drag files into project)
  - Browse button: Click to select files from computer
  - Paste: Paste images from clipboard (Cmd+V)
  - Mobile: Upload from camera or photo gallery (iOS/Android)
  - Multiple files: Upload 10-50 files at once (batch upload)
- Organization needs:
  - Folders: Create folders, nest folders (up to 3 levels deep)
  - Breadcrumbs: Show current location (Project > Design > Mockups)
  - Search: Search by filename, search within folders
  - Filters: Filter by file type (Images, Documents, Videos)
  - Sorting: Sort by name, date, size, type
  - Tags: Optional tagging for cross-folder organization
- Preview requirements:
  - Images: Lightbox viewer with zoom, next/prev navigation
  - PDFs: In-app PDF viewer (don't force download)
  - Videos: Inline video player with controls
  - Documents: Preview first page or thumbnail (full preview optional)
  - Quick look: Hover or spacebar to quick preview (like macOS)
- Actions needed:
  - Download: Individual file or bulk download (zip)
  - Delete: Single or bulk delete with confirmation
  - Rename: Inline rename (click filename to edit)
  - Share: Generate share link, set permissions (view/edit)
  - Move: Drag-drop to move, or move via context menu
  - Copy: Duplicate file within same project
  - Version history: See previous versions, restore old version

Current file management problems:
- Hidden upload button - "Upload" button in top-right corner, tiny, users miss it, many support tickets "How do I upload files?", 30% of new users can't find upload, should be prominent drag-drop zone
- No upload progress indication - Files upload in background, no progress bar, no thumbnail preview, users don't know if upload working or stuck, large files (100MB+) take 2-3 minutes with zero feedback, users click upload multiple times thinking failed
- No file preview capability - Click file → downloads to computer → open in app to view, slow workflow, especially painful for quick checks, users want to preview images/PDFs without downloading, need lightbox or inline preview
- Flat file list chaos - 500+ files in single list, no folders, impossible to organize, users scroll forever to find files, need folder hierarchy and breadcrumbs
- No thumbnails for images - File list shows only filenames "IMG_1234.jpg", no visual thumbnail, can't identify which image is which, need thumbnail grid view for images
- Unclear file actions - Download/Delete/Share hidden in "•••" menu, users don't discover actions, right-click does nothing (no context menu), need clear visible actions
- Terrible mobile experience - Can't upload from mobile camera, file list tiny on phone, no touch gestures (swipe to delete), need mobile-optimized upload and viewing
- No bulk operations - Can't select multiple files to delete/move/download, must do one-by-one, tedious for 20+ files, need checkbox selection and bulk actions
- Upload errors fail silently - File too large or wrong type, upload fails with no error message, user thinks uploaded successfully but file missing, need clear error handling

Team context:
- Users upload 50-200 files per project (documents, screenshots, design files)
- 40% mobile users (need mobile upload from camera/gallery)
- File sizes: Images 1-5MB, Documents 1-10MB, Videos 50-500MB
- Common actions: Upload (daily), Preview (hourly), Download (weekly), Organize into folders (weekly)
- Pain points: Finding files (no search/folders), Uploading large batches (no progress), Previewing without downloading

Please provide:
1. Upload patterns (drag-drop zones, browse button, paste, mobile upload, multi-file)
2. Upload feedback (progress bars, thumbnails, status, errors, success confirmation)
3. File list and grid views (list layout, grid layout, hybrid, when to use which)
4. File organization (folders, breadcrumbs, hierarchy, tags, search, filters)
5. File preview (lightbox for images, PDF viewer, video player, quick look)
6. File actions (download, delete, rename, share, move, bulk actions)
7. Media galleries (image grids, lightbox navigation, slideshow, zoom)
8. Mobile file management (mobile upload from camera/gallery, responsive views, touch actions)

Consider: Prominent drag-drop upload. Real-time progress feedback. Folder organization with breadcrumbs. Image thumbnails in grid view. Lightbox preview for images. PDF inline viewer. Bulk selection and actions. Mobile camera upload. Search and filters. Clear error messages. Works on 320px mobile to 1920px desktop.
```

</aside>

<aside>
👩‍🍳

**CHEF'S TIPS**

✦ Drag-drop is king: Make drag-drop upload prominent and always visible - it's the fastest method
✦ Common mistake: No upload progress - users need to see progress bars and status, especially for large files
✦ Best with: Claude (excellent at systematic file management patterns), ChatGPT (good for upload flow details)
✦ Remix it: "Design image gallery with lightbox preview, grid view, and mobile camera upload"
✦ Pro move: Ask "Audit my file upload flow for UX issues - progress feedback, error handling, mobile support"

</aside>

---

<aside>
🎯

**FOLLOW-UP PROMPTS**

- "Design file upload flow - drag-drop zone, browse button, progress bars, error handling, success confirmation"
- "Create image gallery with lightbox - grid view, full-screen preview, zoom, navigation, mobile swipe"
- "Design folder organization system - create folders, breadcrumbs, search, filters, move files between folders"
- "Build mobile file upload - camera access, gallery picker, progress indicators, thumbnail previews"
</aside>

---

<aside>
💎

EXAMPLE OUTPUT

![23_Example_Output.png](23_Example_Output.png)

</aside>

---

<aside>
🔗

**RELATED RECIPES**

→ Recipe #15: [Design Better Forms](R-15%20Design%20Better%20Forms%202d667ccc6bef80a58694ce629bd1838e.md)
→ Recipe #30: [Design Empty States](R-30%20Design%20Empty%20States%202d767ccc6bef80bf8926fcdc9c1d4e5a.md)
→ Recipe #31: [Polish Your Loading States](R-31%20Polish%20Your%20Loading%20States%202d767ccc6bef806d9294c17a339f61c3.md)
→ Recipe #40: [Design Better Modals](R-40%20Design%20Better%20Modals%202d767ccc6bef800d9012d412a0122f53.md)

</aside>