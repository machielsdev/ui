import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Page, Variant } from '../../src/components';
import { Card, Button, Icon } from '../../src';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Card>
                <Card.Header title="Buttons" />
                <Card.Content>
                    <Button
                        variant={Variant.PRIMARY}
                    >
                        Primary button
                    </Button>
                    <Button
                        variant={Variant.SECONDARY}
                    >
                        Secondary button
                    </Button>
                    <Button
                        variant={Variant.DANGER}
                    >
                        Danger button
                    </Button>
                    <Button
                        variant={Variant.PRIMARY_GHOST}
                    >
                        Primary ghost button
                    </Button>
                    <Button
                        variant={Variant.DANGER_GHOST}
                    >
                        Danger ghost button
                    </Button>
                    <Button
                        variant={Variant.PRIMARY}
                        iconLeft={<Icon icon="home" />}
                    >
                        Icon left
                    </Button>
                    <Button
                        variant={Variant.PRIMARY}
                        iconRight={<Icon icon="compass" />}
                    >
                        Icon right
                    </Button>
                </Card.Content>
            </Card>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
