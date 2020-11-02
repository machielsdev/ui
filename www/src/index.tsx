import * as React from 'react';
import * as ReactDom from 'react-dom';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import '../../src/style/index.scss';
import { Page, Variant } from '../../src/components';
import Button from '@/components/Button';

ReactDom.render(
    <Page>
        <Page.Header title="Dashboard" />
        <Page.Content>
            <Button
                as="a"
                small
                variant={Variant.DANGER_GHOST}
            >
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
            </Button>
            <Button
                variant={Variant.SECONDARY}
                iconLeft={<FontAwesomeIcon icon={faEye} />}
                iconRight={<FontAwesomeIcon icon={faEyeSlash} />}
                block
            >
                Secondary button
            </Button>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
