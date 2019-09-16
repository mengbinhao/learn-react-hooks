import React, { useMemo } from 'react'

export default function Child({name,children}){
  const actionXiaoHong = name => {
      console.log(name)
      return name
  }

  const actionXiaohong = useMemo(() => actionXiaoHong(name), [name])
  return (
      <div>
          <div>{actionXiaohong}</div>
          <div>{children}</div>
      </div>
  )
}
