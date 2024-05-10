import { Button, Form, Input, Modal, Table } from "antd"
import Search from "antd/es/transfer/search";
import { useState } from "react"

const Seller = () => {
    const [bookList, setBookList] = useState([
        {
            "name": "吴鸿洲传奇",
            "price": "999",
            "sellerName": "牢大"
        },
    ])
    const [isAddOpen, setIsAddOpen] = useState(true)

    //列表元素
    const columns = [
        {
            title: '书名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: '拥有者',
            dataIndex: 'sellerName',
            key: 'sellerName',
        },
        {
            title: '操作',
            dataIndex: 'id',
            key: 'id',
            render: (record) => (
                <>
                    <Button
                        style={{ marginLeft: "10px" }}
                        onClick={() => {

                        }}
                    >
                        购买
                    </Button>
                </>
            )
        },
    ];

    const onFinish = (value) => {
        console.log(value)
        setIsAddOpen(false)
    }

    const onSearch = (value) => {
        console.log(value)
    }

    return (
        <div>
            <div>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="搜索"
                    size="large"
                    style={{ width: 600, marginBottom: 20, marginTop: 10 }}
                    onSearch={onSearch}
                />
            </div>

            <div>
                <Table
                    dataSource={bookList} columns={columns} rowKey="id"
                />
            </div>

            <Modal
                open={isAddOpen}
                footer={null}
                onCancel={() => {
                    setIsAddOpen(false)
                }}
                maskClosable={false}
            >
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your bookname!',
                            },
                        ]}
                    >
                        <Input>
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}

export default Seller