const shareButton = document.getElementById('share-button');

// Click on the share button
shareButton.addEventListener('click', () => {
	const shareTooltip = document.getElementById('share-tooltip');
	shareTooltip.classList.toggle('share-tooltip--active');
	shareTooltip.classList.toggle('share-tooltip--hidden');
});

// Click outside the share button
document.addEventListener('click', (event) => {
	const shareTooltip = document.getElementById('share-tooltip');
	if (!shareTooltip.contains(event.target) && !shareButton.contains(event.target)) {
		shareTooltip.classList.remove('share-tooltip--active');
		shareTooltip.classList.add('share-tooltip--hidden');
	}
});
