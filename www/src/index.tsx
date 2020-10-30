import * as React from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Page } from '../../src/components/Page';
import { Button } from '../../src/components/Button';
import { Variant } from '../../src/components/utils';
import { TextField } from '../../src/components/FormField';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Button variant={Variant.PRIMARY}>Test</Button>
            <TextField
                valid={true}
                type="password"
                label="Gebruikersnaam"
            />
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
