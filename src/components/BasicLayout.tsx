'use client';
import React, { FC } from "react";
import RGL, { WidthProvider, Layout } from "react-grid-layout";


interface BasicLayoutProps {
    content: string;
}

const BasicLayout: FC<BasicLayoutProps> = ({content}) => {
    const ReactGridLayout = WidthProvider(RGL);

    const layout: Layout[] = [
        {x: 0, y: 0, w: 4, h: 5, i: '0'},
        {x: 4, y: 0, w: 4, h: 5, i: '1'},
        {x: 8, y: 0, w: 4, h: 5, i: '2'},
        {x: 0, y: 5, w: 6, h: 6, i: '3'},
        {x: 6, y: 5, w: 6, h: 6, i: '4'},
    ]

    // TODO: this doesnt work
    const generateDOM = (layout: Layout[]) =>  {
        return Array.from(layout, (el: Layout, index) => {
            <div key={el.i}>
                <span>{el.i}</span>
            </div>
        })
    }

    return (
        <div>
            <h1>
                This is a Basic Layout component: {content}
            </h1>
            <ReactGridLayout
                className="layout"
                cols={12}
                onLayoutChange={() => { console.log('layout changed')}}
                rowHeight={30}
                layout={layout}
            >
                {/* <>{generateDOM(layout)}</> */}
                <div key='0'>
                    <span className="text">0</span>
                </div>
                <div key='1'>
                    <span className="text">1</span>
                </div>
                <div key='2'>
                    <span className="text">2</span>
                </div>
                <div key='3'>
                    <span className="text">3</span>
                </div>
                <div key='4'>
                    <span className="text">4</span>
                </div>
            </ReactGridLayout>
        </div>
    )
}

export default BasicLayout;