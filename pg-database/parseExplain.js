const result = [ { 'QUERY PLAN': 'Index Scan using homes_pkey on homes  (cost=0.43..8.45 rows=1 width=76) (actual time=0.034..0.035 rows=1 loops=1)' },
  { 'QUERY PLAN': '  Index Cond: (home_id = 9997)' },
  { 'QUERY PLAN': 'Planning Time: 0.818 ms' },
  { 'QUERY PLAN': 'Execution Time: 0.109 ms' } ]

  const parseExplain = (result) => {
    const key = 'QUERY PLAN'
    const execution = result[4][key];
    const time = execution.split(': ')[1]
    const timeNumber = time.split(' ') [1]
    return timeNumber
  }

module.exports.parseExplain;   