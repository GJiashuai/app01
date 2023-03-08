import React, { useEffect, useState } from 'react'
import { Button, Card, Col, List, Popconfirm, Row, Space, Spin } from 'antd'
import { FetchApi } from './common/api'

const ButtonList = ['A', 'B', 'C', 'D']

function App() {
  const [list, setList] = useState([])
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    handleRefresh()
  }, [])

  const handleRefresh = () => {
    setLoading(true);
    FetchApi.get().then((res: any) => {
      setList(res.data)
    }).finally(()=>{
      setLoading(false)
    })
  }


  console.log(list)
  return (
    <Row justify={'center'}>
      <Col span={16}>
        <Spin spinning={loading}>
        <Card>
          <List
            bordered
            dataSource={list}
            renderItem={(item: any,i) => (
              <List.Item>
                <Row justify='space-between' style={{width:'100%'}} align={'middle'}>
                  <Col span={16}>
                    <Space><span>题{i+1}：</span>{ButtonList.map((t,i) => <Popconfirm
                      title={`确认选择答案：${t}`}
                      onConfirm={() => {
                        item.result = t;
                        console.log('答案是',list);
                        FetchApi.save(list).then(()=>{
                          handleRefresh();
                        })
                      }}
                      key={t}
                      okText="确认"
                      cancelText="取消"
                    >
                      <Button>{t}</Button>
                    </Popconfirm>)}</Space>
                  </Col>
                  <Col span={8}>
                    答案：{item?.result}
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Card>
        </Spin>
      </Col>
    </Row>
  )
}

export default App
