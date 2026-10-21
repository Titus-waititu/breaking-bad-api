// import React from 'react'

import type { PropsWithChildren } from "react"
import type { Todo } from "../../types/todo"

type Props = PropsWithChildren<{todo:Todo}>

function TodosItem({children}:Props) {
  return (
    <li>
        {children}
    </li>
  )
}

export default  TodosItem
