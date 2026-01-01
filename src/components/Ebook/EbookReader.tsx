import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './GlobalReset.css';
import './EbookReader.css';

interface Recipe {
  id: string;
  title: string;
  filename: string;
  category?: 'front-matter' | 'main' | 'bonus';
}

// Front Matter
const frontMatter: Recipe[] = [
  { id: 'preface', title: 'Preface', filename: '00-Preface.html', category: 'front-matter' },
  { id: 'how-to-use', title: 'How to Use This Book', filename: '00-How-to-Use.html', category: 'front-matter' },
  { id: 'dedication', title: 'Dedication', filename: '00-Dedication.html', category: 'front-matter' },
  { id: 'about', title: 'About the Author', filename: '00-About.html', category: 'front-matter' },
  { id: 'acknowledgments', title: 'Acknowledgments', filename: '00-Acknowledgments.html', category: 'front-matter' },
  { id: 'disclaimer', title: 'Disclaimer', filename: '00-Disclaimer.html', category: 'front-matter' },
  { id: 'copyright', title: 'Copyright', filename: '00-Copyright.html', category: 'front-matter' },
];

// Main Recipes (R-01 to R-60)
const mainRecipes: Recipe[] = [
  { id: 'r01', title: 'R-01: Plan Your Page Layout', filename: 'R-01 Plan Your Page Layout 2d667ccc6bef8044941beb6a5c872b37.html' },
  { id: 'r02', title: 'R-02: Fix Cluttered Data Views', filename: 'R-02 Fix Cluttered Data Views 2d667ccc6bef80cb97c4fcafda955f11.html' },
  { id: 'r03', title: 'R-03: Organize Your Main Navigation', filename: 'R-03 Organize Your Main Navigation 2d667ccc6bef8036a4f1cffbd03ee3dd.html' },
  { id: 'r04', title: 'R-04: Design Multi-Step Flows', filename: 'R-04 Design Multi-Step Flows 2d667ccc6bef806f9f3be9cdaefa9a9e.html' },
  { id: 'r05', title: 'R-05: Rank Dashboard Information', filename: 'R-05 Rank Dashboard Information 2d667ccc6bef80d2ac13f0eb7bcf0b17.html' },
  { id: 'r06', title: 'R-06: Design Search & Filters', filename: 'R-06 Design Search & Filters 2d667ccc6bef805ca459de3061219cd3.html' },
  { id: 'r07', title: 'R-07: Find Hidden User Dead-Ends', filename: 'R-07 Find Hidden User Dead-Ends 2d667ccc6bef806b890bc2048285b3fa.html' },
  { id: 'r08', title: 'R-08: Create Clear Path Finding', filename: 'R-08 Create Clear Path Finding 2d667ccc6bef80f7a748e543ab0cfc40.html' },
  { id: 'r09', title: 'R-09: Move Desktop to Mobile', filename: 'R-09 Move Desktop to Mobile 2d667ccc6bef806bb6becb18abb33dfe.html' },
  { id: 'r10', title: 'R-10: Modals vs. Side Panels', filename: 'R-10 Modals vs Side Panels 2d667ccc6bef80ba87d9dca8ddee9a39.html' },
  { id: 'r11', title: 'R-11: Right-Click Menus', filename: 'R-11 Right-Click Menus 2d667ccc6bef80cb98c8cde92785b136.html' },
  { id: 'r12', title: 'R-12: Build High-Converting Pages', filename: 'R-12 Build High-Converting Pages 2d667ccc6bef804c85c0d115079037e7.html' },
  { id: 'r13', title: 'R-13: Fix Messy Settings Pages', filename: 'R-13 Fix Messy Settings Pages 2d667ccc6bef80a7a976db712071bdce.html' },
  { id: 'r14', title: 'R-14: Design Step-by-Step Wizards', filename: 'R-14 Design Step-by-Step Wizards 2d667ccc6bef80ce9486d0ade6250204.html' },
  { id: 'r15', title: 'R-15: Design Better Forms', filename: 'R-15 Design Better Forms 2d667ccc6bef80a58694ce629bd1838e.html' },
  { id: 'r16', title: 'R-16: Build Bulk Action Tools', filename: 'R-16 Build Bulk Action Tools 2d667ccc6bef80b8bd2bc0615a25c87c.html' },
  { id: 'r17', title: 'R-17: Design Comparison Tables', filename: 'R-17 Design Comparison Tables 2d667ccc6bef80b2b6b4d90575a87d67.html' },
  { id: 'r18', title: 'R-18: Build Notification Hubs', filename: 'R-18 Build Notification Hubs 2d667ccc6bef8045b369c44f1bba516e.html' },
  { id: 'r19', title: 'R-19: Set Up User Permissions', filename: 'R-19 Set Up User Permissions 2d667ccc6bef80929d1dd2366cada8e3.html' },
  { id: 'r20', title: 'R-20: Audit Your Page Balance', filename: 'R-20 Audit Your Page Balance 2d667ccc6bef80a1b822db98adf1829c.html' },
  { id: 'r21', title: 'R-21: Turn Brand into UI Styles', filename: 'R-21 Turn Brand into UI Styles 2d667ccc6bef808fb671c9d953cc5641.html' },
  { id: 'r22', title: 'R-22: Check Your Color Contrast', filename: 'R-22 Check Your Color Contrast 2d667ccc6bef8030822cc761e4959070.html' },
  { id: 'r23', title: 'R-23: File and Media Management', filename: 'R-23 File and Media Management 2d667ccc6bef8060ae6adfa0fd1d081d.html' },
  { id: 'r24', title: 'R-24: Fix Hard-to-Read Text', filename: 'R-24 Fix Hard-to-Read Text 2d767ccc6bef804e8924e15be9db459f.html' },
  { id: 'r25', title: 'R-25: Pick Your Icon Styles', filename: 'R-25 Pick Your Icon Styles 2d767ccc6bef809cbd6bc7ee914bebdf.html' },
  { id: 'r26', title: 'R-26: Add Depth and Shadows', filename: 'R-26 Add Depth and Shadows 2d767ccc6bef8025a4aff26e74f609ab.html' },
  { id: 'r27', title: 'R-27: Design Smooth Interactions', filename: 'R-27 Design Smooth Interactions 2d767ccc6bef80979ab0f6fc70dc611e.html' },
  { id: 'r28', title: 'R-28: Remove Visual Clutter', filename: 'R-28 Remove Visual Clutter 2d767ccc6bef806ea5dbd329ca407ba1.html' },
  { id: 'r29', title: 'R-29: Create Your Unique Hook', filename: 'R-29 Create Your Unique Hook 2d767ccc6bef8070ab71c1326164ae2f.html' },
  { id: 'r30', title: 'R-30: Design Empty States', filename: 'R-30 Design Empty States 2d767ccc6bef80bf8926fcdc9c1d4e5a.html' },
  { id: 'r31', title: 'R-31: Polish Your Loading States', filename: 'R-31 Polish Your Loading States 2d767ccc6bef806d9294c17a339f61c3.html' },
  { id: 'r32', title: 'R-32: Fix Broken Responsive Design', filename: 'R-32 Fix Broken Responsive Design 2d767ccc6bef807b9fd9e696c8f009ff.html' },
  { id: 'r33', title: 'R-33: Design Clear Data Charts', filename: 'R-33 Design Clear Data Charts 2d767ccc6bef808a9279dcff30fecd7f.html' },
  { id: 'r34', title: 'R-34: Polish Your Input Fields', filename: 'R-34 Polish Your Input Fields 2d767ccc6bef806aa554c4a058472a9b.html' },
  { id: 'r35', title: 'R-35: Design Better Dropdowns', filename: 'R-35 Design Better Dropdowns 2d767ccc6bef80afba3aea677109d708.html' },
  { id: 'r36', title: 'R-36: Update Your Card Designs', filename: 'R-36 Update Your Card Designs 2d767ccc6bef8066ac75cd49763ffa25.html' },
  { id: 'r37', title: 'R-37: Design Better Tooltips', filename: 'R-37 Design Better Tooltips 2d767ccc6bef804ea807db188f871c58.html' },
  { id: 'r38', title: 'R-38: Build Smart Search Bars', filename: 'R-38 Build Smart Search Bars 2d767ccc6bef808691d8cc363e24cc2d.html' },
  { id: 'r39', title: 'R-39: Iterate Your Hero Sections', filename: 'R-39 Iterate Your Hero Sections 2d767ccc6bef80a294e9c663923f0a75.html' },
  { id: 'r40', title: 'R-40: Design Better Modals', filename: 'R-40 Design Better Modals 2d767ccc6bef800d9012d412a0122f53.html' },
  { id: 'r41', title: 'R-41: Design Alerts', filename: 'R-41 Design Alerts 2d767ccc6bef80cfb82fd8f83c76b743.html' },
  { id: 'r42', title: 'R-42: Improve Onboarding Flows', filename: 'R-42 Improve Onboarding Flows 2d767ccc6bef80f2b6b2c8839d98fe10.html' },
  { id: 'r43', title: 'R-43: Create Confirmation Patterns', filename: 'R-43 Create Confirmation Patterns 2d767ccc6bef804aba84f6e0d45a2146.html' },
  { id: 'r44', title: 'R-44: Design Status Indicators', filename: 'R-44 Design Status Indicators 2d767ccc6bef804caa1bf81f3a87a5f9.html' },
  { id: 'r45', title: 'R-45: Design Better Footers', filename: 'R-45 Design Better Footers 2d767ccc6bef8073a41ec682a146654a.html' },
  { id: 'r46', title: 'R-46: Build a Design System Foundation', filename: 'R-46 Build a Design System Foundation 2d767ccc6bef80169c93ff15b9a23dff.html' },
  { id: 'r47', title: 'R-47: Organize Component Libraries in Figma', filename: 'R-47 Organize Component Libraries in Figma 2d767ccc6bef80d29ce0c95e7a0fbf37.html' },
  { id: 'r48', title: 'R-48: Design Smart Defaults', filename: 'R-48 Design Smart Defaults 2d767ccc6bef80729793db8459ae5170.html' },
  { id: 'r49', title: 'R-49: Design Component Variants', filename: 'R-49 Design Component Variants 2d767ccc6bef8061a641c8db579cd3b7.html' },
  { id: 'r50', title: 'R-50: Properties vs. Variants in Figma', filename: 'R-50 Properties vs Variants in Figma 2d767ccc6bef80e2b61bd3a4a3a760b5.html' },
  { id: 'r51', title: 'R-51: Build Responsive Components', filename: 'R-51 Build Responsive Components 2d767ccc6bef8015b2effc042a7b2cbe.html' },
  { id: 'r52', title: 'R-52: Design Multi-State Components', filename: 'R-52 Design Multi-State Components 2d767ccc6bef80c091a9e89c40b1fd3a.html' },
  { id: 'r53', title: 'R-53: Flexible Data Tables', filename: 'R-53 Flexible Data Tables 2d767ccc6bef8020b5e8fea04b8f6efe.html' },
  { id: 'r54', title: 'R-54: Flexible Chart Components', filename: 'R-54 Flexible Chart Components 2d767ccc6bef80c5b226e720fef24fa2.html' },
  { id: 'r55', title: 'R-55: Create Pattern Libraries', filename: 'R-55 Create Pattern Libraries 2d767ccc6bef8074b299ef0842d21259.html' },
  { id: 'r56', title: 'R-56: Build Color Palettes', filename: 'R-56 Build Color Palettes 2d767ccc6bef80268ce9ff601c08a13e.html' },
  { id: 'r57', title: 'R-57: Create Icon Systems', filename: 'R-57 Create Icon Systems 2d767ccc6bef80bbacdbdc5617f7f7ef.html' },
  { id: 'r58', title: 'R-58: Build Typography Systems', filename: 'R-58 Build Typography Systems 2d767ccc6bef80a697f8df65451a5b47.html' },
  { id: 'r59', title: 'R-59: Design Grid Systems', filename: 'R-59 Design Grid Systems 2d767ccc6bef8091a4c4d63ce2d8286b.html' },
  { id: 'r60', title: 'R-60: Documentation & Guidelines', filename: 'R-60 Documentation & Guidelines 2d767ccc6bef80bcb647f5c77a19ffa8.html' },
];

// Bonus Recipes (R-61 to R-75)
const bonusRecipes: Recipe[] = [
  { id: 'r61', title: 'R-61: Conduct User Interviews', filename: 'R-61 Conduct User Interviews 58d67ccc6bef8373bbd40159926507e4.html' },
  { id: 'r62', title: 'R-62: Plan and Run Usability Tests', filename: 'R-62 Plan and Run Usability Tests 37867ccc6bef83a9aefe011022174a00.html' },
  { id: 'r63', title: 'R-63: Research Surveys and Screeners', filename: 'R-63 Research Surveys and Screeners 75767ccc6bef8338adab01eca04d1e57.html' },
  { id: 'r64', title: 'R-64: Design Accessible Components', filename: 'R-64 Design Accessible Components d8c67ccc6bef83ed9c3201d848757c88.html' },
  { id: 'r65', title: 'R-65: Design for Cognitive Accessibility', filename: 'R-65 Design for Cognitive Accessibility 2d867ccc6bef800e8746f314fba73e87.html' },
  { id: 'r66', title: 'R-66: Design for Dark Mode', filename: 'R-66 Design for Dark Mode 2d867ccc6bef8007aa94f48df654ee97.html' },
  { id: 'r67', title: 'R-67: Glassmorphism and Frosted UI', filename: 'R-67 Glassmorphism and Frosted UI 2d867ccc6bef802487a6f66fa7a690e7.html' },
  { id: 'r68', title: 'R-68: Design for Mobile', filename: 'R-68 Design for Mobile 2d867ccc6bef80c6ae22cb9f2639fc8c.html' },
  { id: 'r69', title: 'R-69: Write Better UX Copy', filename: 'R-69 Write Better UX Copy 2d867ccc6bef808592b4c0f3341bdd42.html' },
  { id: 'r70', title: 'R-70: Internationalization & Localization', filename: 'R-70 Internationalization & Localization 2d867ccc6bef80908126c55fa1dbe103.html' },
  { id: 'r71', title: 'R-71: Design AI Chat Interfaces', filename: 'R-71 Design AI Chat Interfaces 2d867ccc6bef80debe9de04cb1dbeec7.html' },
  { id: 'r72', title: 'R-72: Design Tokens in Figma', filename: 'R-72 Design Tokens in Figma 2d867ccc6bef80839ee7ec3aaadb1649.html' },
  { id: 'r73', title: 'R-73: Developer-Friendly Design Specs', filename: 'R-73 Developer-Friendly Design Specs 2d867ccc6bef804eae58c28f42a64b2d.html' },
  { id: 'r74', title: 'R-74: Generate HTML & CSS from Figma', filename: 'R-74 Generate HTML & CSS from Figma 2d867ccc6bef80a28208fba9fe6e39da.html' },
  { id: 'r75', title: 'R-75: Developer Prototypes with Figma AI', filename: 'R-75 Developer Prototypes with Figma AI 2d867ccc6bef809585e0e8256265034f.html' },
];

const allRecipes = [...frontMatter, ...mainRecipes, ...bonusRecipes];

export const EbookReader: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(frontMatter[0]);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'main' | 'bonus'>('all');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('ebook-theme');
    return saved === 'dark';
  });
  const [expandedSections, setExpandedSections] = useState<{
    frontMatter: boolean;
    main: boolean;
    bonus: boolean;
  }>({
    frontMatter: true,
    main: true,
    bonus: true,
  });
  const contentRef = useRef<HTMLDivElement>(null);
  const { currentUser, userPaidStatus, logout } = useAuth();
  const navigate = useNavigate();

  const toggleSection = (section: 'frontMatter' | 'main' | 'bonus') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('ebook-theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  // Check if user has access
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    
    if (!userPaidStatus) {
      navigate('/purchase');
      return;
    }
  }, [currentUser, userPaidStatus, navigate]);

  // Load HTML content
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/ebook-content/${selectedRecipe.filename}`);
        if (!response.ok) {
          throw new Error('Failed to load content');
        }
        let html = await response.text();
        
        // Fix image paths to point to ebook-content folder
        html = html.replace(/src="([^"]+\.png)"/g, 'src="/ebook-content/$1"');
        html = html.replace(/src="([^"]+\.jpg)"/g, 'src="/ebook-content/$1"');
        html = html.replace(/src="([^"]+\.jpeg)"/g, 'src="/ebook-content/$1"');
        html = html.replace(/href="([^"]+\.png)"/g, 'href="/ebook-content/$1"');
        
        // Override only the width-limiting CSS in Notion's styles
        html = html.replace(/max-width:\s*900px;/gi, 'max-width: 100%;');
        html = html.replace(/margin:\s*2em\s+auto;/gi, 'margin: 0;');
        
        // Apply dark mode color replacements in the embedded CSS if in dark mode
        if (isDarkMode) {
          console.log('Dark mode is ON, applying color replacements...');
          const originalLength = html.length;
          
          // Count replacements
          let replacementCount = 0;
          
          // Test if green color exists before replacement
          const greenMatch = html.match(/background:\s*rgba\(232,\s*241,\s*236,\s*1\)/gi);
          console.log('Green background found:', greenMatch ? greenMatch.length : 0);
          
          // Replace all background colors in CSS rules - BRIGHTER colors for visibility
          // Gray backgrounds
          html = html.replace(/background:\s*rgba\(240,\s*239,\s*237,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(75, 85, 99, 0.4)'; });
          html = html.replace(/background:\s*rgb\(247,\s*246,\s*243\)/gi, () => { replacementCount++; return 'background: rgba(75, 85, 99, 0.4)'; });
          html = html.replace(/background:\s*rgba\(206,\s*205,\s*202,\s*0\.5\)/gi, () => { replacementCount++; return 'background: rgba(75, 85, 99, 0.4)'; });
          // Brown backgrounds - warmer, more visible
          html = html.replace(/background:\s*rgba\(245,\s*237,\s*233,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(180, 83, 9, 0.3)'; });
          html = html.replace(/background:\s*rgba\(42,\s*28,\s*0,\s*0\.07\)/gi, () => { replacementCount++; return 'background: rgba(180, 83, 9, 0.3)'; });
          // Orange backgrounds - brighter
          html = html.replace(/background:\s*rgba\(251,\s*235,\s*222,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(234, 88, 12, 0.3)'; });
          html = html.replace(/background:\s*rgba\(139,\s*46,\s*0,\s*0\.086\)/gi, () => { replacementCount++; return 'background: rgba(234, 88, 12, 0.3)'; });
          html = html.replace(/background:\s*rgba\(224,\s*101,\s*1,\s*0\.129\)/gi, () => { replacementCount++; return 'background: rgba(234, 88, 12, 0.3)'; });
          // Yellow backgrounds - more saturated
          html = html.replace(/background:\s*rgba\(249,\s*243,\s*220,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(202, 138, 4, 0.3)'; });
          html = html.replace(/background:\s*rgba\(211,\s*168,\s*0,\s*0\.137\)/gi, () => { replacementCount++; return 'background: rgba(202, 138, 4, 0.3)'; });
          // Green backgrounds - MUCH brighter and more visible
          html = html.replace(/background:\s*rgba\(232,\s*241,\s*236,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(21, 128, 61, 0.35)'; });
          html = html.replace(/background:\s*rgba\(0,\s*100,\s*45,\s*0\.09\)/gi, () => { replacementCount++; return 'background: rgba(21, 128, 61, 0.35)'; });
          // Blue backgrounds - brighter
          html = html.replace(/background:\s*rgba\(229,\s*242,\s*252,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(37, 99, 235, 0.3)'; });
          html = html.replace(/background:\s*rgba\(0,\s*124,\s*215,\s*0\.094\)/gi, () => { replacementCount++; return 'background: rgba(37, 99, 235, 0.3)'; });
          // Purple backgrounds - more saturated
          html = html.replace(/background:\s*rgba\(243,\s*235,\s*249,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(126, 34, 206, 0.3)'; });
          html = html.replace(/background:\s*rgba\(102,\s*0,\s*178,\s*0\.078\)/gi, () => { replacementCount++; return 'background: rgba(126, 34, 206, 0.3)'; });
          // Pink/Red backgrounds - brighter
          html = html.replace(/background:\s*rgba\(250,\s*233,\s*241,\s*1\)/gi, () => { replacementCount++; return 'background: rgba(219, 39, 119, 0.3)'; });
          html = html.replace(/background:\s*rgba\(197,\s*0,\s*93,\s*0\.086\)/gi, () => { replacementCount++; return 'background: rgba(219, 39, 119, 0.3)'; });
          html = html.replace(/background:\s*rgba\(223,\s*22,\s*0,\s*0\.094\)/gi, () => { replacementCount++; return 'background: rgba(220, 38, 38, 0.3)'; });
          
          console.log(`Made ${replacementCount} color replacements`);
          console.log('HTML length changed from', originalLength, 'to', html.length);
        } else {
          console.log('Dark mode is OFF, no replacements');
        }
        
        // Remove junk data before the main recipe title (fixes R-62 and similar issues)
        // Find the first h1 tag and remove everything before it in the page-body
        const h1Match = html.match(/<h1[^>]*>Recipe #\d+:/i);
        if (h1Match) {
          const h1Index = html.indexOf(h1Match[0]);
          const bodyStart = html.indexOf('<div class="page-body">');
          if (bodyStart !== -1 && h1Index > bodyStart) {
            // Keep everything before page-body, then insert the h1 and everything after
            const beforeBody = html.substring(0, bodyStart + '<div class="page-body">'.length);
            const fromH1 = html.substring(h1Index);
            html = beforeBody + '<div style="display:contents" dir="auto">' + fromH1;
          }
        }
        
        setContent(html);
      } catch (error) {
        console.error('Error loading content:', error);
        setContent('<h1>Error</h1><p>Failed to load content. Please try again.</p>');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [selectedRecipe, isDarkMode]);


  // Add copy buttons and handle internal links after content loads
  useEffect(() => {
    if (!loading && contentRef.current) {
      // Add copy buttons to code blocks
      const codeBlocks = contentRef.current.querySelectorAll('pre.code');
      codeBlocks.forEach((block) => {
        // Check if copy button already exists
        if (block.querySelector('.copy-button')) return;
        
        const htmlBlock = block as HTMLElement;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 20.332 24.5996">
            <g>
              <rect height="24.5996" opacity="0" width="20.332" x="0" y="0"/>
              <path d="M14.0625 0.976562L18.9941 5.98633C19.7266 6.73828 19.9707 7.5 19.9707 8.70117L19.9707 16.6309C19.9707 18.6621 18.9551 19.6973 16.9434 19.6973L15.2344 19.6973L15.2344 18.125L16.8555 18.125C17.8711 18.125 18.3984 17.5781 18.3984 16.6016L18.3984 8.25195L13.8281 8.25195C12.7051 8.25195 12.1582 7.71484 12.1582 6.58203L12.1582 1.57227L7.8418 1.57227C6.82617 1.57227 6.30859 2.12891 6.30859 3.0957L6.30859 4.87305L4.73633 4.87305L4.73633 3.06641C4.73633 1.03516 5.75195 0 7.76367 0L11.5039 0C12.5488 0 13.3691 0.263672 14.0625 0.976562ZM13.5742 6.34766C13.5742 6.68945 13.7109 6.83594 14.0527 6.83594L17.9883 6.83594L13.5742 2.34375Z" fill="currentColor" fill-opacity="0.85"/>
              <path d="M0 21.5039C0 23.5449 1.00586 24.5703 3.02734 24.5703L12.207 24.5703C14.2285 24.5703 15.2344 23.5352 15.2344 21.5039L15.2344 13.877C15.2344 12.627 15.0879 12.0801 14.3066 11.2793L8.92578 5.80078C8.18359 5.03906 7.56836 4.87305 6.47461 4.87305L3.02734 4.87305C1.01562 4.87305 0 5.89844 0 7.93945ZM1.57227 21.4746L1.57227 7.95898C1.57227 7.00195 2.08984 6.44531 3.10547 6.44531L6.30859 6.44531L6.30859 12.1094C6.30859 13.3398 6.93359 13.9551 8.14453 13.9551L13.6621 13.9551L13.6621 21.4746C13.6621 22.4512 13.1348 22.998 12.1289 22.998L3.0957 22.998C2.08984 22.998 1.57227 22.4512 1.57227 21.4746ZM8.33008 12.4805C7.93945 12.4805 7.7832 12.3242 7.7832 11.9336L7.7832 6.80664L13.3594 12.4805Z" fill="currentColor" fill-opacity="0.85"/>
            </g>
          </svg>
        `;
        copyButton.title = 'Copy to clipboard';
        
        copyButton.addEventListener('click', async () => {
          const code = htmlBlock.querySelector('code');
          if (code) {
            await navigator.clipboard.writeText(code.textContent || '');
            copyButton.innerHTML = `
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M13.25 4.75L6 12L2.75 8.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            `;
            copyButton.classList.add('copied');
            setTimeout(() => {
              copyButton.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 20.332 24.5996">
                  <g>
                    <rect height="24.5996" opacity="0" width="20.332" x="0" y="0"/>
                    <path d="M14.0625 0.976562L18.9941 5.98633C19.7266 6.73828 19.9707 7.5 19.9707 8.70117L19.9707 16.6309C19.9707 18.6621 18.9551 19.6973 16.9434 19.6973L15.2344 19.6973L15.2344 18.125L16.8555 18.125C17.8711 18.125 18.3984 17.5781 18.3984 16.6016L18.3984 8.25195L13.8281 8.25195C12.7051 8.25195 12.1582 7.71484 12.1582 6.58203L12.1582 1.57227L7.8418 1.57227C6.82617 1.57227 6.30859 2.12891 6.30859 3.0957L6.30859 4.87305L4.73633 4.87305L4.73633 3.06641C4.73633 1.03516 5.75195 0 7.76367 0L11.5039 0C12.5488 0 13.3691 0.263672 14.0625 0.976562ZM13.5742 6.34766C13.5742 6.68945 13.7109 6.83594 14.0527 6.83594L17.9883 6.83594L13.5742 2.34375Z" fill="currentColor" fill-opacity="0.85"/>
                    <path d="M0 21.5039C0 23.5449 1.00586 24.5703 3.02734 24.5703L12.207 24.5703C14.2285 24.5703 15.2344 23.5352 15.2344 21.5039L15.2344 13.877C15.2344 12.627 15.0879 12.0801 14.3066 11.2793L8.92578 5.80078C8.18359 5.03906 7.56836 4.87305 6.47461 4.87305L3.02734 4.87305C1.01562 4.87305 0 5.89844 0 7.93945ZM1.57227 21.4746L1.57227 7.95898C1.57227 7.00195 2.08984 6.44531 3.10547 6.44531L6.30859 6.44531L6.30859 12.1094C6.30859 13.3398 6.93359 13.9551 8.14453 13.9551L13.6621 13.9551L13.6621 21.4746C13.6621 22.4512 13.1348 22.998 12.1289 22.998L3.0957 22.998C2.08984 22.998 1.57227 22.4512 1.57227 21.4746ZM8.33008 12.4805C7.93945 12.4805 7.7832 12.3242 7.7832 11.9336L7.7832 6.80664L13.3594 12.4805Z" fill="currentColor" fill-opacity="0.85"/>
                  </g>
                </svg>
              `;
              copyButton.classList.remove('copied');
            }, 2000);
          }
        });
        
        htmlBlock.style.position = 'relative';
        htmlBlock.appendChild(copyButton);
      });

      // Handle internal recipe links
      const links = contentRef.current.querySelectorAll('a[href$=".html"]');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            // Find the recipe with this filename
            const recipe = allRecipes.find(r => r.filename === href);
            if (recipe) {
              setSelectedRecipe(recipe);
              // Scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
        });
      });
    }
  }, [loading, content]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  // Filter recipes based on search and tab
  const getFilteredRecipes = () => {
    let recipes: Recipe[] = [];
    
    if (activeTab === 'all') {
      recipes = allRecipes;
    } else if (activeTab === 'main') {
      recipes = mainRecipes;
    } else {
      recipes = bonusRecipes;
    }

    if (searchQuery.trim() === '') {
      return recipes;
    }

    const query = searchQuery.toLowerCase();
    return recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query)
    );
  };

  const filteredRecipes = getFilteredRecipes();

  if (!currentUser || !userPaidStatus) {
    return null;
  }

  return (
    <div className={`ebook-container ${isDarkMode ? 'dark-theme' : ''}`}>
      {/* Header */}
      <header className="ebook-header">
        <div className="header-left">
          <h1>Design AI Alchemy</h1>
        </div>
        <div className="header-right">
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`toggle-track ${isDarkMode ? 'active' : ''}`}>
              <div className="toggle-thumb">
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </div>
          </button>
          <span className="user-email">{currentUser.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <div className="ebook-main">
        {/* Sidebar */}
        <aside className="ebook-sidebar">
          <div className="sidebar-header">
            <h2>Table of Contents</h2>
            <span className="recipe-count">{frontMatter.length + mainRecipes.length + bonusRecipes.length} items</span>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              className={`filter-tab ${activeTab === 'main' ? 'active' : ''}`}
              onClick={() => setActiveTab('main')}
            >
              Main
            </button>
            <button
              className={`filter-tab ${activeTab === 'bonus' ? 'active' : ''}`}
              onClick={() => setActiveTab('bonus')}
            >
              Bonus
            </button>
          </div>

          {/* Recipe List */}
          <nav className="recipe-list">
            {filteredRecipes.length === 0 ? (
              <div className="no-results">
                <p>No recipes found</p>
              </div>
            ) : (
              <>
                {/* Front Matter Section */}
                {activeTab === 'all' && searchQuery === '' && (
                  <div className="recipe-section">
                    <button
                      className="section-title-button"
                      onClick={() => toggleSection('frontMatter')}
                    >
                      <span className={`section-chevron ${expandedSections.frontMatter ? 'expanded' : ''}`}>
                        ▶
                      </span>
                      <h3 className="section-title">Front Matter</h3>
                    </button>
                    {expandedSections.frontMatter && (
                      <div className="section-content">
                        {frontMatter.map((recipe) => (
                          <button
                            key={recipe.id}
                            className={`recipe-item ${selectedRecipe.id === recipe.id ? 'active' : ''}`}
                            onClick={() => setSelectedRecipe(recipe)}
                          >
                            {recipe.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Main Recipes Section */}
                {(activeTab === 'all' || activeTab === 'main') && searchQuery === '' && (
                  <div className="recipe-section">
                    <button
                      className="section-title-button"
                      onClick={() => toggleSection('main')}
                    >
                      <span className={`section-chevron ${expandedSections.main ? 'expanded' : ''}`}>
                        ▶
                      </span>
                      <h3 className="section-title">Main Recipes (1-60)</h3>
                    </button>
                    {expandedSections.main && (
                      <div className="section-content">
                        {mainRecipes.map((recipe) => (
                          <button
                            key={recipe.id}
                            className={`recipe-item ${selectedRecipe.id === recipe.id ? 'active' : ''}`}
                            onClick={() => setSelectedRecipe(recipe)}
                          >
                            {recipe.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Bonus Recipes Section */}
                {(activeTab === 'all' || activeTab === 'bonus') && searchQuery === '' && (
                  <div className="recipe-section">
                    <button
                      className="section-title-button"
                      onClick={() => toggleSection('bonus')}
                    >
                      <span className={`section-chevron ${expandedSections.bonus ? 'expanded' : ''}`}>
                        ▶
                      </span>
                      <h3 className="section-title">Bonus Recipes (61-75)</h3>
                    </button>
                    {expandedSections.bonus && (
                      <div className="section-content">
                        {bonusRecipes.map((recipe) => (
                          <button
                            key={recipe.id}
                            className={`recipe-item ${selectedRecipe.id === recipe.id ? 'active' : ''}`}
                            onClick={() => setSelectedRecipe(recipe)}
                          >
                            {recipe.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {/* Search Results (when searching) */}
                {searchQuery !== '' && filteredRecipes.map((recipe) => (
                  <button
                    key={recipe.id}
                    className={`recipe-item ${selectedRecipe.id === recipe.id ? 'active' : ''}`}
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    {recipe.title}
                  </button>
                ))}
              </>
            )}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="ebook-content">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading recipe...</p>
            </div>
          ) : (
            <article 
              ref={contentRef}
              className="html-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </main>
      </div>
    </div>
  );
};
