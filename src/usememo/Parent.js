import React , {useState } from 'react'
import Child from './Child'

export default function ParentDemo(){
    const [xiaohong, setXiaoHong] = useState('小红')
    const [xiaohuang, setXiaoHuang] = useState('小黄')
    return (
      <div>
        <button onClick={() => setXiaoHong(+new Date())}>小红</button>
        <button onClick={() => setXiaoHuang(+new Date())}>小黄</button>
        <Child name={xiaohong}>{xiaohuang}</Child>
      </div>
    )
}

