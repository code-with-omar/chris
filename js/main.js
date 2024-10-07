const quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Enter your text here...',
    modules: {
        toolbar: [
            // Font family selection
            [{ font: ['serif', 'sans-serif', 'monospace', 'arial', 'georgia',] }],
            // Font size selection
            [{ size: ['small', false, 'large', 'huge'] }],
            // Text formatting options
            ['bold', 'italic', 'underline', 'strike'], // Bold, italic, underline, strikethrough
            // Text color and background color
            [{ color: [] }, { background: [] }],
            // Header styles
            [{ header: [1, 2, 3, false] }],
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
const toolbar = document.querySelector('.ql-toolbar');

if (toolbar) {
    toolbar.id = "custom-toolbar"
}

// Enable spell check
document.querySelector('.ql-editor').setAttribute('spellcheck', 'true');
