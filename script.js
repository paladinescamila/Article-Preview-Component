const shareButton = document.getElementById('share-button');
const shareTooltip = document.getElementById('share-tooltip');

// When the share button is clicked
const setShareExpanded = (isExpanded) => {
	shareButton.setAttribute('aria-expanded', String(isExpanded));
	shareTooltip.setAttribute('aria-hidden', String(!isExpanded));
	shareTooltip.classList.toggle('share-tooltip--active', isExpanded);
};

shareButton.addEventListener('click', () => {
	const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
	setShareExpanded(!isExpanded);
});

// When a click is detected outside the share button or tooltip
document.addEventListener('click', (event) => {
	if (!shareTooltip.contains(event.target) && !shareButton.contains(event.target)) {
		setShareExpanded(false);
	}
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		setShareExpanded(false);
		shareButton.focus();
	}
});
