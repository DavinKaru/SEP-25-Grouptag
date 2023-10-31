// @ts-nocheck

export function convertTime(postTime) {

    // Calculation for timestamp
    let createdAt = new Date(postTime);

    // Get the current date
    let now = new Date();

    // Calculate the difference
    let difference = now - createdAt;

    // Conversion
    let minutes = Math.floor(difference / 1000 / 60);
    let hours = Math.floor(minutes / 60);

    let timeSince; if (hours > 0) {
        if (hours > 24) {
            let days = Math.floor(hours / 24);
            if (days > 31) {
                let months = Math.floor(days / 31);
                if (months > 12) {
                    let years = Math.floor(months / 12);
                    timeSince = `${years} YEARS AGO`;
                    return timeSince;
                } else {
                    timeSince = `${months} MONTHS AGO`;
                    return timeSince;
                }
            } else {
                timeSince = `${days} DAYS AGO`;
                return timeSince;
            }
        } else {
            timeSince = `${hours} HOURS AGO`;
            return timeSince;
        }
    } else {
        timeSince = `${minutes} MINUTES AGO`;
        return timeSince;
    }
}