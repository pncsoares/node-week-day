const { dayOfTheWeek } = require('./app');

test('getDay returns the long-format day of the week: Monday', () => {
    const day = dayOfTheWeek(new Date('02/14/2022'));
    expect(day).toBe('Monday');
});

test('getDay returns the long-format day of the week: Tuesday', () => {
    const day = dayOfTheWeek(new Date('02/15/2022'));
    expect(day).toBe('Tuesday');
});

test('getDay returns the long-format day of the week: Wednesday', () => {
    const day = dayOfTheWeek(new Date('02/16/2022'));
    expect(day).toBe('Wednesday');
});

test('getDay returns the long-format day of the week: Thursday', () => {
    const day = dayOfTheWeek(new Date('02/17/2022'));
    expect(day).toBe('Thursday');
});

test('getDay returns the long-format day of the week: Friday', () => {
    const day = dayOfTheWeek(new Date('02/18/2022'));
    expect(day).toBe('Friday');
});

test('getDay returns the long-format day of the week: Saturday', () => {
    const day = dayOfTheWeek(new Date('02/19/2022'));
    expect(day).toBe('Saturday');
});

test('getDay returns the long-format day of the week: Sunday', () => {
    const day = dayOfTheWeek(new Date('02/20/2022'));
    expect(day).toBe('Sunday');
});