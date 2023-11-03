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
                    if (years === 1) {
                        return "1 YEAR AGO";
                    }
                    else {
                        timeSince = `${years} YEARS AGO`;
                        return timeSince;
                    }
                } else {
                    if (months == 1) {
                        return "1 MONTH AGO";
                    } else {
                        timeSince = `${months} MONTHS AGO`;
                        return timeSince;
                    }
                }
            } else {
                if (days === 1) {
                    return "1 DAY AGO";
                } else {
                    timeSince = `${days} DAYS AGO`;
                    return timeSince;
                }
            }
        } else {
            if (hours === 1) {
                return "1 HOUR AGO";
            } else {
                timeSince = `${hours} HOURS AGO`;
                return timeSince;
            }
        }
    } else {
        if (minutes === 1) {
            return "1 MINUTE AGO";
        } else {
            timeSince = `${minutes} MINUTES AGO`;
            return timeSince;
        }
    }
}