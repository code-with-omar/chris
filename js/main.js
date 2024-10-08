// Import the Quill editor and Block blot
var Block = Quill.import('blots/block');

// Define an array for font sizes similar to Microsoft Word
var fontSizeArr = ['11px', '12px', '14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px', '36px', '48px', '72px'];

// Import the size attribute from Quill's styling options
var Size = Quill.import('attributors/style/size');

// Allow only the font sizes defined in fontSizeArr
Size.whitelist = fontSizeArr;

// Register the size attribute with Quill to use it in the editor
Quill.register(Size, true);

// Initialize the Quill editor with the #editor-container element and apply the 'snow' theme
const quill = new Quill('#editor-container', {
    theme: 'snow',  // Snow is the default Quill theme
    placeholder: "Write your text here...",  // Placeholder text in the editor
    modules: {
        toolbar: [
            // Font family selection options: serif, sans-serif, and monospace
            [{ font: ['serif', 'sans-serif', 'monospace'] }],
            // Font size selection using the custom fontSizeArr
            [{ 'size': fontSizeArr }],
            // Heading or header styles (h1 to h6 and no heading)
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            // Basic text formatting options: bold, italic, underline, and strike-through
            ['bold', 'italic', 'underline', 'strike'],
            // Text and background color options
            [{ color: [] }, { background: [] }],
            // Ordered and bullet list options
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            // Text alignment options: left (default), center, right, and justify
            [{ 'align': null }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
            // Blockquote and code block formatting
            ['blockquote', 'code-block'],
            // Emoji button for inserting emojis
            ['emoji'],
            // Button to clear formatting
            ['clean'],
        ],
        // Enable the emoji toolbar
        'emoji-toolbar': true,
        // Disable the emoji textarea functionality
        'emoji-textarea': false,
        // Enable short names for emojis like ":smile:"
        'emoji-shortname': true
    }
});

// Set a custom ID for the toolbar element (for styling or other purposes)
const toolbar = document.querySelector('.ql-toolbar');
if (toolbar) {
    toolbar.id = "custom-toolbar";
}

// Select the existing color picker dropdown in the toolbar for background color
const colorDropdown = document.querySelector('.ql-background');

// Customize the highlighter icon (Google Sheets-like) for background color
if (colorDropdown) {
    const existingSVG = colorDropdown.querySelector('.ql-picker-label'); // Find existing SVG icon in the picker
    if (existingSVG) {
        // New SVG icon markup
        const newSVG = `<?xml version="1.0" standalone="no"?>
        <!-- License: MIT. Made by ant-design: https://github.com/ant-design/ant-design-icons -->
        <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z"/>
        </svg>`;
        // Replace the existing SVG icon with the new one
        existingSVG.innerHTML = newSVG;
    }
}

// Enable spellcheck for the editor content
document.querySelector('.ql-editor').setAttribute('spellcheck', 'true');

// Remove placeholder text when the editor is focused
document.querySelector('#editor-container .ql-editor').addEventListener('focus', function() {
    quill.root.removeAttribute('data-placeholder');
});
