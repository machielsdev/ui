import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Page, Variant } from '../../src/components';
import { Button } from '@/components/Button';
import Card from '../../src/components/Card/Card';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Card>
                <Card.Header
                    title="Test"
                    actions={[
                        <Button small variant={Variant.PRIMARY}>Test</Button>,
                        <Button small variant={Variant.PRIMARY}>Test</Button>
                    ]}
                />
                <Card.Content>
                    Test
                </Card.Content>
            </Card>
            {/*<Button*/}
            {/*    as="a"*/}
            {/*    small*/}
            {/*    variant={Variant.DANGER_GHOST}*/}
            {/*>*/}
            {/*    <FontAwesomeIcon icon={faArrowAltCircleDown} />*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*    variant={Variant.SECONDARY}*/}
            {/*    iconLeft={<FontAwesomeIcon icon={faEye} />}*/}
            {/*    iconRight={<FontAwesomeIcon icon={faEyeSlash} />}*/}
            {/*    block*/}
            {/*>*/}
            {/*    Secondary button*/}
            {/*</Button>*/}
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
