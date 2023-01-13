import './App.css'
import React from 'react'

function App() {
  // const exist = function (board, word) {
  //   const m = board.length
  //   const n = board[0].length

  //   const direaction = [
  //     [0, 1],
  //     [0, -1],
  //     [1, 0],
  //     [-1, 0],
  //   ]

  //   const visit = Array(m).fill(Array(n).fill(false))

  //   function check(i, j, k) {
  //     if (board[i][j] !== word.charAt(k)) {
  //       return false
  //     }

  //     if (k === word.length - 1) {
  //       return true
  //     }

  //     visit[i][j] = true

  //     let result = false

  //     for (const [dx, dy] of direaction) {
  //       const newi = i + dx
  //       const newj = j + dy
  //       if (newi >= 0 && newi < m && newj >= 0 && newj < n) {
  //         if (visit[newi][newj] === false) {
  //           const flag = check(newi, newj, k + 1)
  //           if (flag) {
  //             result = true
  //             break
  //           }
  //         }
  //       }
  //     }

  //     visit[i][j] = false
  //     return result
  //   }

  //   for (let i = 0; i < m; i++) {
  //     for (let j = 0; j < n; j++) {
  //       console.log('111')
  //       const flag = check(i, j, 0)
  //       if (flag) {
  //         return 1
  //       }
  //     }
  //   }

  //   return 0
  // }

  // const a = exist(
  //   [
  //     ['A', 'B', 'C', 'E'],
  //     ['S', 'F', 'C', 'S'],
  //     ['A', 'D', 'E', 'E'],
  //   ],
  //   'ABCCED'
  // )

  // return <>{a}</>
  return <>11</>
}
export default App
