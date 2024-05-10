import { Button } from "antd";
import BuyProduct from "../../components/products/BuyProduct";
import "./index.scss"
import { useState } from "react";
import Contact from "../../components/Contact";
import { useSearchParams } from "react-router-dom";



const BookDetail = () => {
    const [search,setsearch] = useSearchParams()

    const [isBuyProductOpen, setIsBuyProductOpen] = useState(false);//控制购买商品窗口的显示
    const [isContactOpen, setIsContactOpen] = useState(false); //控制聊天窗口显示

    const Buy = () => {
        setIsBuyProductOpen(true)
    }

    const openContact = () => {
        setIsContactOpen(true)
    }

    //关闭购买商品窗口
    const closeBuyDialog = () => {
        setIsBuyProductOpen(false)
    }

    //关闭聊天窗口
    const closeContact = () => {
        setIsContactOpen(false)
    }

    return (
        <div>
            <div className="bookimg" />
            <div className="title">
                高等数学
            </div>
            <div className="price">
                ￥200
            </div>
            <div className="seller">
                卖家: miaomiao
                <br />
                <br />
                发布时间: 2024-4-23
                <br />
                <br />
                详情: 全世界最好的拉菲
            </div>
            <div className="button">
                <Button
                    type="primary"
                    size="large"
                    onClick={Buy}
                >购买</Button>

                <Button
                    type="primary"
                    size="large"
                    onClick={openContact}
                    style={{
                        backgroundColor: "orange",
                        position: "relative",
                        marginLeft: "20px"
                    }}
                >
                    联系卖家
                </Button>
            </div>

            <BuyProduct
                open={isBuyProductOpen}
                close={closeBuyDialog}
            ></BuyProduct>

            <Contact
                open={isContactOpen}
                close={closeContact}
            >
            </Contact>
        </div>
    )
}

export default BookDetail;