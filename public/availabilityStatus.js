/**
 * Determines the availability status and CSS class for a product based on stock level
 * @param {number} stock - The stock level of the product
 * @returns {{text: string, className: string, color: string}} Status information
 */
function getAvailabilityStatus(stock) {
	if (stock > 10) {
		return {
			text: "Disponibile",
			className: "status-available",
			color: "rgb(34, 197, 94)",
		};
	}
	if (stock > 0) {
		return {
			text: "Scorte in esaurimento",
			className: "status-running-low",
			color: "rgb(234, 179, 8)",
		};
	}
	return {
		text: "Esaurito",
		className: "status-out-of-stock",
		color: "rgb(239, 68, 68)",
	};
}
