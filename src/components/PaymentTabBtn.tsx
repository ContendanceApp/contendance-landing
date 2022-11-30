import React from "react";

type TabProps = {
    id: number;
    name: string;
    category: string;
    activeTab: boolean;
};

const PaymentTabBtn = (props: TabProps) => {
    // const [activeTab, setActiveTab] = useState(false);

    // const clickTabHandler = (id: number) => {
    //     setActiveTab(id);
    // };

    return (
        <div
            className={`payment-tab-btn ${props.activeTab ? "active" : ""}`}
            // onClick={() => setActiveTab(true)}
            data-category={props.category}
        >
            {props.name}
        </div>
    );
};

export default PaymentTabBtn;
