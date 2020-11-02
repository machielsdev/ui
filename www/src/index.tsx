import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Page } from '../../src/components/Page';
import { Button } from '../../src/components/Button';
import { Variant } from '../../src/components/utils';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Button
                as="a"
                small
                variant={Variant.DANGER_GHOST}
            >
            </Button>
            <Button
                variant={Variant.SECONDARY}
                block
            >
                Secondary button
            </Button>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
