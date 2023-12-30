const TANSTACK_QUERY_COUNT = 12

function lastTwoDigits(number) {
  return `0${number}`.slice(-2)
}

module.exports = {
  mySidebar: [
    {
      type: 'category',
      label: 'HTML / CSS',
      items: ['html-css/tai-lieu-tham-khao-hoc-html-css-co-ban'],
    },
    {
      type: 'category',
      label: 'Javascript',
      items: [
        'javascript/js-02-01',
        'javascript/js-02-02',
        'javascript/js-02-03',
        'javascript/js-02-04',
        'javascript/js-04-06',
        'javascript/js-04-08',
        'javascript/js-04-09',
        'javascript/js-04-10',
        'javascript/js-04-11',
      ],
    },
    {
      type: 'category',
      label: 'Tanstack Query',
      items: new Array(TANSTACK_QUERY_COUNT)
        .fill()
        .map((_, index) => `tanstack-query/tanstack-query-${lastTwoDigits(index + 1)}`),
    },
  ],
}
