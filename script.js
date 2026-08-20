const shareButton = document.getElementById('share-button');
const shareTooltip = document.getElementById('share-tooltip');
const share = document.querySelector('.share');

const setShareExpanded = (isExpanded) => {
	shareButton.setAttribute('aria-expanded', String(isExpanded));
	shareTooltip.setAttribute('aria-hidden', String(!isExpanded));
	shareTooltip.classList.toggle('share-tooltip--active', isExpanded);
};

const toggleShareTooltip = () => {
	const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';
	setShareExpanded(!isExpanded);
};

shareButton.addEventListener('click', toggleShareTooltip);

share.addEventListener('pointerenter', () => {
	shareTooltip.setAttribute('aria-hidden', 'false');
});

share.addEventListener('pointerleave', () => {
	if (shareButton.getAttribute('aria-expanded') !== 'true') {
		shareTooltip.setAttribute('aria-hidden', 'true');
	}
});

share.addEventListener('focusin', () => {
	shareTooltip.setAttribute('aria-hidden', 'false');
});

share.addEventListener('focusout', (event) => {
	if (
		!share.contains(event.relatedTarget) &&
		shareButton.getAttribute('aria-expanded') !== 'true'
	) {
		shareTooltip.setAttribute('aria-hidden', 'true');
	}
});

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
