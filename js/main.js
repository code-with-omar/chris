// Import Quill and Block
const Block = Quill.import('blots/block');

// Define the custom blockquote blot
class BlockquoteBlot extends Block {
    static blotName = 'blockquote'; // Unique name for the blot
    static tagName = 'blockquote';    // HTML tag to be used
}

// Register the custom blot with Quill
Quill.register(BlockquoteBlot);

// Initialize Quill editor
const quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Enter your text here...',
    modules: {
        toolbar: [
            // Font family selection
            [{ font: ['serif', 'sans-serif', 'monospace'] }],
            // Font size selection
            [{ size: ['small', false, 'large', 'huge'] }],
            // Header styles
            [{ header: [1, 2, 3, false] }],
            // Text formatting options
            ['bold', 'italic', 'underline', 'strike'], // Bold, italic, underline, strikethrough
            // Text color and background color
            [{ color: [] }, { background: [] }],
            // Lists
            [{ list: 'ordered' }, { list: 'bullet' }],
            // Text alignment
            [{ align: [] }],
            // Blockquote and code block
            ['blockquote', 'code-block'],
            // Emoji button
            ['emoji'],
            // Clear formatting
            ['clean'],
        ],
        'emoji-toolbar': true, // Enable emoji toolbar
        'emoji-textarea': false, // Disable emoji in the textarea (optional)
        'emoji-shortname': true // Enable emoji short names
    }
});

// Set custom ID for the toolbar
const toolbar = document.querySelector('.ql-toolbar');
if (toolbar) {
    toolbar.id = "custom-toolbar";
}

// Select the existing SVG icon for color
const colorDropdown = document.querySelector('.ql-background');

// Add highlighter as like as google sheet
if (colorDropdown) {
    const existingSVG = colorDropdown.querySelector('.ql-picker-label'); // Find existing SVG
    if (existingSVG) {
        // New SVG markup
        const newSVG = `<?xml version="1.0" standalone="no"?>
<!-- License: MIT. Made by ant-design: https://github.com/ant-design/ant-design-icons -->
<svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2z"/>
</svg>
`;
        existingSVG.innerHTML = newSVG; // Replace with new SVG
    }
}
// Enable spell check
document.querySelector('.ql-editor').setAttribute('spellcheck', 'true');
