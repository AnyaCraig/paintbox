// helper functions

const formatYear = (date) => {
    return new Date(date).getFullYear();
}

const formatLongDate = (date) => {

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = months[dateObject.getMonth()];
    const day = dateObject.getDate();

    return `${day} ${month}, ${year}`;
}

const makeRegEx = (searchTerm, text) => {
    try {
        return new RegExp(searchTerm, 'i').test(text);
    } catch(e) {
        return false;
    }
}

module.exports = { formatYear, formatLongDate, makeRegEx };