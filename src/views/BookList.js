import React, { useEffect, useState } from "react";
import { Table, Button, message, Input, Divider, Select } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookAPI, getBookNumberAPI, getTypeAPI } from "../store/modules/books";
import { Option } from "antd/es/mentions";


const { Search } = Input;



const BookList = () => {
  // const [params] = useSearchParams();

  const navigate = useNavigate();

  const [dataSource, setDataSouse] = useState([]);
  const [total, setTotal] = useState(0); //书籍数量
  const [pageSize, setPageSize] = useState(10); //每页大小
  const [pageNumber, setPageNumber] = useState(1); //当前页
  const [searchContent, setSearchContent] = useState(''); //搜索文本
  const [typeList, setTypeList] = useState([]);
  const [type, setType] = useState(0)
  const [sortWay, setSortWay] = useState(1)
  const [criteria, setCriteria] = useState({ pageNumber: 0 }) //搜索条件

  const getBookList = async () => {
    //获取数量
    await getBookNumberAPI(criteria).then((res) => {
      if (res.code == 0) {
        setTotal(res.data)
      } else {
        console.log(res.message)
      }
    }).catch(function (err) {
      console.log(err);
    })
    //获取列表
    await getBookAPI(criteria).then((res) => {
      if (res.code == 0) {
        setDataSouse(res.data)
      } else {
        console.log(res.message)
      }
    }).catch(function (err) {
      console.log(err);
    })
  }
  
  //筛选
  const onSelect = (value) => {
    setType(value)
  }
  useEffect(() => {
    const newCriteria = { ...criteria, typeId: type }
    setCriteria(newCriteria)
  }, [type])

  //翻页
  const changePage = (page) => {
    setPageNumber(page);
  };
  useEffect(() => {
    const newCriteria = { ...criteria, pageNumber: pageNumber - 1 }
    setCriteria(newCriteria)
  }, [pageNumber])

  //搜索
  const onSearch = (value) => {
    setSearchContent(value)
  }
  useEffect(() => {
    const newCriteria = { ...criteria, content: searchContent }
    setCriteria(newCriteria)
  }, [searchContent])

  //监听排序方式是否被改变
  useEffect(() => {
    const newCriteria = { ...criteria, orderRequest: sortWay }
    setCriteria(newCriteria)
  }, [sortWay])

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
      title: '发布时间',
      dataIndex: 'releaseTime',
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
              navigate("/bookDetail?id="+record);
            }}
          >
            购买
          </Button>
        </>
      )
    },
  ];

  //搜索条件变化时，重新渲染列表
  useEffect(() => {
    getBookList(criteria)
  }, [criteria])

  useEffect(() => {
    getTypeAPI().then((res) => {
      if (res.code == 0) {
        setTypeList(res.data)
      } else {
        console.log(res.message)
      }
    }).catch(function (err) {
      console.log(err);
    })
    getBookList()
  }, [])

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
        <Button
          type="link"
          size="large"
          onClick={() => { setSortWay(1) }}
          style={{
            height: "45px",
            fontSize: "16px",
            fontWeight: "400",
            color: sortWay == 1 ? "#1677FF" : "black",
            backgroundColor: sortWay == 1 ? "#e1e1e1" : null
          }}
        >
          最新发布
        </Button>
        <Button
          type="link"
          size="large"
          onClick={() => { setSortWay(0) }}
          style={{
            height: "45px",
            fontSize: "16px",
            fontWeight: "400",
            color: sortWay == 0 ? "#1677FF" : "black",
            backgroundColor: sortWay == 0 ? "#e1e1e1" : null
          }}
        >
          最晚发布
        </Button>
        <Button
          type="link"
          size="large"
          onClick={() => { setSortWay(2) }}
          style={{
            height: "45px",
            fontSize: "16px",
            fontWeight: "400",
            color: sortWay == 2 ? "#1677FF" : "black",
            backgroundColor: sortWay == 2 ? "#e1e1e1" : null
          }}
        >
          按价格从低到高
        </Button>
        <Button
          type="link"
          size="large"
          onClick={() => { setSortWay(3) }}
          style={{
            height: "45px",
            fontSize: "16px",
            fontWeight: "400",
            color: sortWay == 3 ? "#1677FF" : "black",
            backgroundColor: sortWay == 3 ? "#e1e1e1" : null
          }}
        >
          按价格从高到低
        </Button>
        <Select
          placeholder="筛选"
          style={{
            position: "absolute",
            left: "90%",
            width: 120,
          }}
          onSelect={onSelect}
        >
          {typeList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      </div>

      <div>
        <Table
          dataSource={dataSource} columns={columns} rowKey="id"
          pagination={{
            pageSize: pageSize,
            defaultCurrent: pageNumber,
            onChange: changePage,
            total: total,
          }}
        />
      </div>

    </div>
  );
}

export default BookList;