import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Page } from '../../src/components/Page';
import { Input } from '../../src/components/Input';
import { Button } from '../../src/components/Button';
import { Variant } from '../../src/components/utils';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Button variant={Variant.PRIMARY}>Test</Button>
            <Input type="password" />
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
