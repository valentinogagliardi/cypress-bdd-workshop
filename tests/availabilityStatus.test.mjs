import { describe, expect, test } from "vitest";
import { getAvailabilityStatus } from "../lib/availabilityStatus.mjs";

describe("getAvailabilityStatus", () => {
	test("returns Disponibile status for stock greater than 10", () => {
		const result = getAvailabilityStatus(15);

		expect(result.text).toBe("Disponibile");
		expect(result.className).toBe("status-available");
		expect(result.color).toBe("rgb(34, 197, 94)");
	});

	test("returns Disponibile status for stock exactly 11", () => {
		const result = getAvailabilityStatus(11);

		expect(result.text).toBe("Disponibile");
		expect(result.className).toBe("status-available");
		expect(result.color).toBe("rgb(34, 197, 94)");
	});

	test("returns Scorte in esaurimento status for stock between 1 and 10 (inclusive)", () => {
		const result = getAvailabilityStatus(8);

		expect(result.text).toBe("Scorte in esaurimento");
		expect(result.className).toBe("status-running-low");
		expect(result.color).toBe("rgb(234, 179, 8)");
	});

	test("returns Scorte in esaurimento status for stock exactly 10", () => {
		const result = getAvailabilityStatus(10);

		expect(result.text).toBe("Scorte in esaurimento");
		expect(result.className).toBe("status-running-low");
		expect(result.color).toBe("rgb(234, 179, 8)");
	});

	test("returns Scorte in esaurimento status for stock exactly 1", () => {
		const result = getAvailabilityStatus(1);

		expect(result.text).toBe("Scorte in esaurimento");
		expect(result.className).toBe("status-running-low");
		expect(result.color).toBe("rgb(234, 179, 8)");
	});

	test("returns Esaurito status for stock at 0", () => {
		const result = getAvailabilityStatus(0);

		expect(result.text).toBe("Esaurito");
		expect(result.className).toBe("status-out-of-stock");
		expect(result.color).toBe("rgb(239, 68, 68)");
	});

	test("returns Esaurito status for negative stock", () => {
		const result = getAvailabilityStatus(-5);

		expect(result.text).toBe("Esaurito");
		expect(result.className).toBe("status-out-of-stock");
		expect(result.color).toBe("rgb(239, 68, 68)");
	});
});
