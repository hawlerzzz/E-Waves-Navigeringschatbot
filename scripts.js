let isOpen = true;

function toggleChat() {
    isOpen = !isOpen;
    const shell = document.getElementById('shell');
    const fab = document.getElementById('fab');
    const badge = document.getElementById('badge');

    if (isOpen) {
        shell.classList.remove('hidden');
        fab.classList.add('open');
        badge.classList.add('hidden');
        setTimeout(() => document.getElementById('inp').focus(), 300);
    } else {
        shell.classList.add('hidden');
        fab.classList.remove('open');
    }
}