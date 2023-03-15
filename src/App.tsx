import React, { useState } from 'react';
import { Layout} from 'antd';
import NewHeader from "./components/NewHeader";
import NewContent from "./components/NewContent";
import NewMenu from "./components/NewMenu";

const {Footer } = Layout;



const App: React.FC = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <NewMenu/>
            <Layout className="site-layout">
                <NewHeader/>
                <NewContent/>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;