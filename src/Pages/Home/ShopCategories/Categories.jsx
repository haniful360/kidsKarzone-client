import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Categories.css'

const Categories = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='relative'>
            <h2 className='shop-title text-center'>Shop category</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Sports car</Tab>
                    <Tab>Mini police car</Tab>
                    <Tab>Mini fire truck</Tab>
                </TabList>

                <TabPanel>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias architecto nobis itaque saepe nostrum dolore, at modi laudantium rerum voluptate?
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur quis aperiam dolorum rem voluptates fugit aspernatur at voluptatibus! Pariatur quas eveniet magnam deserunt dolor placeat, facere, nostrum voluptates, consequuntur impedit adipisci sit dolorem molestias. Esse, earum ut quas consequatur iure voluptatem. Repellendus voluptas, exercitationem molestias dicta totam nam odio.</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Categories;