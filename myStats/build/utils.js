"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateSringToDate = void 0;
function dateSringToDate(dateString) {
    var dateParts = dateString.split('/').map(function (part) {
        return parseInt(part);
    });
    return new Date(dateParts[2], dateParts[1], dateParts[0]);
}
exports.dateSringToDate = dateSringToDate;
