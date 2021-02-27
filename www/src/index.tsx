import * as React from 'react';
import { useState } from 'react';
import * as ReactDom from 'react-dom';

import '../../src/style/index.scss';
import { Button, Card, Col, Grid, Icon, Modal, Page, Row, SelectField, Tag, TextField, Variant } from '../../src';
import Container from '../../src/components/Container/Container';
import FormGroup from '../../src/components/Form/Group';
import FormLabel from '../../src/components/Form/Label';
import FormMessage from '../../src/components/Form/Message';
import { Tooltip } from '../../src/components/Tooltip';

const TestControllable = () => {
    const [value, setValue] = useState('');

    return (
        <>
            <h5>Controllable inputs</h5>
            <FormGroup>
                <TextField
                    label="Changable input"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    label="Input that will be changed"
                    value={value}
                />
            </FormGroup>
        </>
    );
}

const TestModals = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    const [thirdModalOpen, setThirdModalOpen] = useState(false);

    return (
        <>
            <Button
                variant={Variant.AMBER}
                onClick={(): void => {
                    setModalOpen(!modalOpen)
                }}
            >
                Open modal
            </Button>
            <Modal
                show={modalOpen}
                onHide={() => {
                    setModalOpen(false);
                }}
            >
                <Card>
                    <Card.Content>
                        <Button
                            variant={Variant.GREEN}
                            onClick={() => {
                                setSecondModalOpen(!secondModalOpen);
                            }}
                        >
                            Open second
                        </Button>
                        <Modal
                            show={secondModalOpen}
                            onHide={(): void => {
                                setSecondModalOpen(false);
                            }}
                            backdrop={false}
                        >
                            <Card>
                                <Card.Header title="Second modal" />
                                <Card.Content>
                                    Content
                                    <Button
                                        variant={Variant.PURPLE}
                                        onClick={() => {
                                            setThirdModalOpen(!thirdModalOpen);
                                        }}
                                    >
                                        <Modal
                                            show={thirdModalOpen}
                                            onHide={(): void => {
                                                setThirdModalOpen(false);
                                            }}
                                        >
                                            <Card>
                                                <Card.Content>
                                                    Third
                                                </Card.Content>
                                            </Card>
                                        </Modal>
                                        Open third
                                    </Button>
                                </Card.Content>
                            </Card>
                        </Modal>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis commodi dicta distinctio fugiat labore laboriosam nisi nobis, possimus quasi recusandae repellendus repudiandae tempore. A deleniti omnis perspiciatis quos vero!
                    </Card.Content>
                </Card>
            </Modal>
        </>
    )
};

ReactDom.render(
    <Page>
        <Page.Header title="Coderan UI"/>
        <Page.Content>
            <Container>
                <Row>
                    <Card className="mb-8">
                        <Card.Header title="Buttons"/>
                        <Card.Content>
                            <Grid columns={7} gap={4} className="mb-8">
                                <div>
                                    <Button variant={Variant.PRIMARY}>Primary</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.SECONDARY}>Secondary</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.DANGER}>Danger</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.PRIMARY_GHOST}>Primary ghost</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.DANGER_GHOST}>Danger ghost</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.PRIMARY} iconLeft={<Icon icon="home"/>}>Icon left</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.PRIMARY} iconRight={<Icon icon="user"/>}>Icon
                                        right</Button>
                                </div>
                            </Grid>
                            <h4>Button colors</h4>
                            <Grid columns={7} gap={4} className="mb-8">
                                <div>
                                    <Button variant={Variant.RED} block>Rood</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.PINK} block>Roze</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.PURPLE} block>Paars</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.DEEP_PURPLE} block>Diep-paars</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.INDIGO} block>Indigo</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.BLUE} block>Blauw</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.LIGHT_BLUE} block>Lichtblauw</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.TEAL} block>Teal</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.GREEN} block>Groen</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.LIGHT_GREEN} block>Lichtgroen</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.LIME} block>Limoen</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.YELLOW} block>Geel</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.AMBER} block>Amber</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.ORANGE} block>Oranje</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.BROWN} block>Bruin</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.GRAY} block>Grijs</Button>
                                </div>
                                <div>
                                    <Button variant={Variant.BLUE_GRAY} block>Blauwgrijs</Button>
                                </div>
                                <div>
                                    <Tooltip
                                        content="Megalange tekst"
                                        placement="top"
                                        trigger="click"
                                        motion="fade"
                                    >
                                        <Button
                                            variant={Variant.ORANGE}
                                        >
                                            top
                                        </Button>
                                    </Tooltip>
                                    <Tooltip
                                        content="Megalange tekst"
                                        placement="right"
                                        trigger="click"
                                        motion="fade"
                                    >
                                        <Button
                                            variant={Variant.ORANGE}
                                        >
                                            right
                                        </Button>
                                    </Tooltip>
                                    <Tooltip
                                        content="Megalange tekst"
                                        placement="bottom"
                                    >
                                        <Button
                                            variant={Variant.ORANGE}
                                        >
                                            bottom
                                        </Button>
                                    </Tooltip>
                                    <Tooltip
                                        content="Megalange tekst"
                                        placement="left"
                                        trigger="click"
                                    >
                                        <Button
                                            variant={Variant.ORANGE}
                                        >
                                            left
                                        </Button>
                                    </Tooltip>
                                </div>
                            </Grid>
                        </Card.Content>
                    </Card>
                </Row>
                <Row>
                    <Card className="mb-8">
                        <Card.Header title="Grid"/>
                        <Card.Content>
                            <Container fluid>
                                <Row className="mb-8">
                                    <Col className="py-4 background-primary-light">Col 1/1</Col>
                                </Row>
                                <Row className="mb-8">
                                    <Col className="py-4 background-primary-light">Col 1/2</Col>
                                    <Col className="py-4 background-primary-light">Col 2/2</Col>
                                </Row>

                                <Row className="mb-8">
                                    <Col className="py-4 background-primary-light">Col 1/3</Col>
                                    <Col className="py-4 background-primary-light">Col 2/3</Col>
                                    <Col className="py-4 background-primary-light">Col 3/4</Col>
                                </Row>

                                <Row className="mb-8">
                                    <Col className="py-4 background-primary-light">Col 1/3</Col>
                                    <Col className="py-4 background-primary-light">Col 2/3</Col>
                                    <Col className="py-4 background-primary-light">Col 3/4</Col>
                                </Row>

                                <Row className="mb-8">
                                    <Col className="py-4 background-primary-light">Col 1/4</Col>
                                    <Col className="py-4 background-primary-light">Col 2/4</Col>
                                    <Col className="py-4 background-primary-light">Col 3/4</Col>
                                    <Col className="py-4 background-primary-light">Col 4/4</Col>
                                </Row>
                            </Container>
                        </Card.Content>
                    </Card>
                </Row>
                <Row className="mb-8">
                    <Card>
                        <Card.Header title="Inputs"/>
                        <Card.Content>
                            <FormGroup>
                                <h5 className="text-primary">Standard input</h5>
                                <FormLabel htmlFor="a">Username</FormLabel>
                                <TextField id="a"/>
                            </FormGroup>

                            <FormGroup>
                                <h5>Input with floating label</h5>
                                <TextField label="Username"/>
                            </FormGroup>

                            <FormGroup>
                                <h5>Input with default value</h5>
                                <TextField
                                    label="With default value"
                                    value="Hello world"
                                />
                            </FormGroup>

                            <FormGroup>
                                <h5>Input with actions</h5>
                                <TextField
                                    label="Username"
                                    type="password"
                                    onChange={() => {

                                    }}
                                    actions={[
                                        <Button small variant={Variant.PRIMARY}><Icon icon="eye"/></Button>
                                    ]}
                                    valid={true}
                                />
                            </FormGroup>

                            <FormGroup>
                                <h5>Invalid input</h5>
                                <TextField
                                    label="Invalid input"
                                    valid={false}
                                />
                                <FormMessage valid={false}>
                                    Input is invalid
                                </FormMessage>
                            </FormGroup>

                            <FormGroup>
                                <h5>Valid input</h5>
                                <TextField
                                    label="Valid input"
                                    valid
                                />
                            </FormGroup>
                            <FormGroup>
                                <h5>Valid input</h5>
                                <SelectField
                                    label="Valid input"
                                    valid
                                >
                                    <option value="b">A</option>
                                    <option value="d">B</option>
                                    <option value="e">C</option>
                                    <option value="f">D</option>
                                    <option value="g">E</option>
                                </SelectField>
                            </FormGroup>
                            <TestControllable/>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Header title="Tags"/>
                        <Card.Content>
                            test text
                            <Tag variant={Variant.PRIMARY}>Primary</Tag>
                            <Tag variant={Variant.DANGER}>Danger</Tag>
                            <Tag variant={Variant.RED}>Rood</Tag>
                            <Tag variant={Variant.PINK}>Roze</Tag>
                            <Tag variant={Variant.PURPLE}>Paars</Tag>
                            <Tag variant={Variant.DEEP_PURPLE}>Diep-paars</Tag>
                            <Tag variant={Variant.INDIGO}>Indigo</Tag>
                            <Tag variant={Variant.BLUE}>Blauw</Tag>
                            <Tag variant={Variant.LIGHT_BLUE}>Lichtblauw</Tag>
                            <Tag variant={Variant.TEAL}>Teal</Tag>
                            <Tag variant={Variant.GREEN}>Groen</Tag>
                            <Tag variant={Variant.LIGHT_GREEN}>Lichtgroen</Tag>
                            <Tag variant={Variant.LIME}>Limoen</Tag>
                            <Tag variant={Variant.YELLOW}>Geel</Tag>
                            <Tag variant={Variant.AMBER}>Amber</Tag>
                            <Tag variant={Variant.ORANGE}>Oranje</Tag>
                            <Tag variant={Variant.BROWN}>Bruin</Tag>
                            <Tag variant={Variant.GRAY}>Grijs</Tag>
                            <Tag variant={Variant.BLUE_GRAY}>Blauwgrijs</Tag>
                        </Card.Content>
                    </Card>
                </Row>
                <Row>
                    <Card>
                        <Card.Header title="Modals" />
                        <Card.Content>
                            <TestModals />
                        </Card.Content>
                    </Card>
                </Row>
                <Row>
                    <Grid columns={10} gap={4}>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Activity</div>
                                <Icon icon="activity" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Alert circle</div>
                                <Icon icon="alert-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Alert triangle</div>
                                <Icon icon="alert-triangle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Archive</div>
                                <Icon icon="archive" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow left</div>
                                <Icon icon="arrow-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow circle down</div>
                                <Icon icon="arrow-circle-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow circle left</div>
                                <Icon icon="arrow-circle-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow circle right</div>
                                <Icon icon="arrow-circle-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow circle up</div>
                                <Icon icon="arrow-circle-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sort down</div>
                                <Icon icon="sort-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sort down</div>
                                <Icon icon="arrow-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow right</div>
                                <Icon icon="arrow-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow alt left</div>
                                <Icon icon="arrow-alt-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow alt down</div>
                                <Icon icon="arrow-alt-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow alt right</div>
                                <Icon icon="arrow-alt-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow alt up</div>
                                <Icon icon="arrow-alt-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sort left</div>
                                <Icon icon="sort-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sort right</div>
                                <Icon icon="sort-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sort up</div>
                                <Icon icon="sort-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Arrow up</div>
                                <Icon icon="arrow-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">chevron-double down</div>
                                <Icon icon="chevron-double-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">chevron-double left</div>
                                <Icon icon="chevron-double-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">chevron-double right</div>
                                <Icon icon="chevron-double-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">chevron-double up</div>
                                <Icon icon="chevron-double-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">At</div>
                                <Icon icon="at" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Attach 2</div>
                                <Icon icon="attach-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Attach</div>
                                <Icon icon="attach" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Award</div>
                                <Icon icon="award" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Backspace</div>
                                <Icon icon="backspace" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bar chart 2</div>
                                <Icon icon="bar-chart-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bar chart</div>
                                <Icon icon="bar-chart" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Battery</div>
                                <Icon icon="battery" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Behance</div>
                                <Icon icon="behance" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bell off</div>
                                <Icon icon="bell-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bell</div>
                                <Icon icon="bell" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bluetooth</div>
                                <Icon icon="bluetooth" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Book open</div>
                                <Icon icon="book-open" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Book</div>
                                <Icon icon="book" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bookmark</div>
                                <Icon icon="bookmark" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Briefcase</div>
                                <Icon icon="briefcase" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Browser</div>
                                <Icon icon="browser" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Brush</div>
                                <Icon icon="brush" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Bulb</div>
                                <Icon icon="bulb" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Calendar</div>
                                <Icon icon="calendar" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Camera</div>
                                <Icon icon="camera" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Car</div>
                                <Icon icon="car" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Cast</div>
                                <Icon icon="cast" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Charging</div>
                                <Icon icon="charging" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Checkmark circle 2</div>
                                <Icon icon="checkmark-circle-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Checkmark circle</div>
                                <Icon icon="checkmark-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Checkmark</div>
                                <Icon icon="checkmark" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Checkmark square 2</div>
                                <Icon icon="checkmark-square-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Checkmark square</div>
                                <Icon icon="checkmark-square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Chevron down</div>
                                <Icon icon="chevron-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Chevron left</div>
                                <Icon icon="chevron-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Chevron right</div>
                                <Icon icon="chevron-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Chevron up</div>
                                <Icon icon="chevron-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Clipboard</div>
                                <Icon icon="clipboard" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Clock</div>
                                <Icon icon="clock" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Close circle</div>
                                <Icon icon="close-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Close</div>
                                <Icon icon="close" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Close square</div>
                                <Icon icon="close-square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Cloud download</div>
                                <Icon icon="cloud-download" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Cloud upload</div>
                                <Icon icon="cloud-upload" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Code download</div>
                                <Icon icon="code-download" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Code</div>
                                <Icon icon="code" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Collapse</div>
                                <Icon icon="collapse" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Color palette</div>
                                <Icon icon="color-palette" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Color picker</div>
                                <Icon icon="color-picker" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Compass</div>
                                <Icon icon="compass" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Copy</div>
                                <Icon icon="copy" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner down left</div>
                                <Icon icon="corner-down-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner down right</div>
                                <Icon icon="corner-down-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner left down</div>
                                <Icon icon="corner-left-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner left up</div>
                                <Icon icon="corner-left-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner right down</div>
                                <Icon icon="corner-right-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner right up</div>
                                <Icon icon="corner-right-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner up left</div>
                                <Icon icon="corner-up-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Corner up right</div>
                                <Icon icon="corner-up-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Credit card</div>
                                <Icon icon="credit-card" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Crop</div>
                                <Icon icon="crop" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Cube</div>
                                <Icon icon="cube" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Diagonal arrow left down</div>
                                <Icon icon="diagonal-arrow-left-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Diagonal arrow left up</div>
                                <Icon icon="diagonal-arrow-left-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Diagonal arrow right down</div>
                                <Icon icon="diagonal-arrow-right-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Diagonal arrow right up</div>
                                <Icon icon="diagonal-arrow-right-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Done all</div>
                                <Icon icon="done-all" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Download</div>
                                <Icon icon="download" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Droplet off</div>
                                <Icon icon="droplet-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Droplet</div>
                                <Icon icon="droplet" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Edit 2</div>
                                <Icon icon="edit-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Edit</div>
                                <Icon icon="edit" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Email</div>
                                <Icon icon="email" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Expand</div>
                                <Icon icon="expand" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">External link</div>
                                <Icon icon="external-link" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Eye off 2</div>
                                <Icon icon="eye-off-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Eye off</div>
                                <Icon icon="eye-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Eye</div>
                                <Icon icon="eye" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Facebook</div>
                                <Icon icon="facebook" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">File add</div>
                                <Icon icon="file-add" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">File</div>
                                <Icon icon="file" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">File remove</div>
                                <Icon icon="file-remove" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">File text</div>
                                <Icon icon="file-text" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Film</div>
                                <Icon icon="film" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Flag</div>
                                <Icon icon="flag" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Flash off</div>
                                <Icon icon="flash-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Flash</div>
                                <Icon icon="flash" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Flip 2</div>
                                <Icon icon="flip-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Flip</div>
                                <Icon icon="flip" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Folder add</div>
                                <Icon icon="folder-add" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Folder</div>
                                <Icon icon="folder" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Folder remove</div>
                                <Icon icon="folder-remove" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Funnel</div>
                                <Icon icon="funnel" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Gift</div>
                                <Icon icon="gift" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Github</div>
                                <Icon icon="github" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Globe 2</div>
                                <Icon icon="globe-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Globe</div>
                                <Icon icon="globe" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Google</div>
                                <Icon icon="google" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Grid</div>
                                <Icon icon="grid" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Hard drive</div>
                                <Icon icon="hard-drive" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Hash</div>
                                <Icon icon="hash" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Headphones</div>
                                <Icon icon="headphones" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Heart</div>
                                <Icon icon="heart" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Home</div>
                                <Icon icon="home" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Image</div>
                                <Icon icon="image" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Inbox</div>
                                <Icon icon="inbox" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Info</div>
                                <Icon icon="info" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Keypad</div>
                                <Icon icon="keypad" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Layers</div>
                                <Icon icon="layers" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Layout</div>
                                <Icon icon="layout" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Link 2</div>
                                <Icon icon="link-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Link</div>
                                <Icon icon="link" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Linkedin</div>
                                <Icon icon="linkedin" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">List</div>
                                <Icon icon="list" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Loader</div>
                                <Icon icon="loader" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Lock</div>
                                <Icon icon="lock" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Log in</div>
                                <Icon icon="log-in" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Log out</div>
                                <Icon icon="log-out" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Map</div>
                                <Icon icon="map" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Maximize</div>
                                <Icon icon="maximize" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Menu 2</div>
                                <Icon icon="menu-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Menu arrow</div>
                                <Icon icon="menu-arrow" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Menu</div>
                                <Icon icon="menu" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Message circle</div>
                                <Icon icon="message-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Message square</div>
                                <Icon icon="message-square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Mic off</div>
                                <Icon icon="mic-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Mic</div>
                                <Icon icon="mic" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Minimize</div>
                                <Icon icon="minimize" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Minus circle</div>
                                <Icon icon="minus-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Minus</div>
                                <Icon icon="minus" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Minus square</div>
                                <Icon icon="minus-square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Monitor</div>
                                <Icon icon="monitor" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Moon</div>
                                <Icon icon="moon" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">More horizontal</div>
                                <Icon icon="more-horizontal" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">More vertical</div>
                                <Icon icon="more-vertical" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Move</div>
                                <Icon icon="move" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Music</div>
                                <Icon icon="music" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Navigation 2</div>
                                <Icon icon="navigation-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Navigation</div>
                                <Icon icon="navigation" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Npm</div>
                                <Icon icon="npm" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Options 2</div>
                                <Icon icon="options-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Options</div>
                                <Icon icon="options" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Pantone</div>
                                <Icon icon="pantone" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Paper plane</div>
                                <Icon icon="paper-plane" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Pause circle</div>
                                <Icon icon="pause-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">People</div>
                                <Icon icon="people" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Percent</div>
                                <Icon icon="percent" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">user add</div>
                                <Icon icon="user-add" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">user delete</div>
                                <Icon icon="user-delete" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">user done</div>
                                <Icon icon="user-done" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">user</div>
                                <Icon icon="user" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">user remove</div>
                                <Icon icon="user-remove" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Phone call</div>
                                <Icon icon="phone-call" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Phone missed</div>
                                <Icon icon="phone-missed" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Phone off</div>
                                <Icon icon="phone-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Phone</div>
                                <Icon icon="phone" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Pie chart</div>
                                <Icon icon="pie-chart" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Pin</div>
                                <Icon icon="pin" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Play circle</div>
                                <Icon icon="play-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Plus circle</div>
                                <Icon icon="plus-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Plus</div>
                                <Icon icon="plus" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Plus square</div>
                                <Icon icon="plus-square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Power</div>
                                <Icon icon="power" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Pricetags</div>
                                <Icon icon="pricetags" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Printer</div>
                                <Icon icon="printer" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Question mark circle</div>
                                <Icon icon="question-mark-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Question mark</div>
                                <Icon icon="question-mark" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Radio button off</div>
                                <Icon icon="radio-button-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Radio button on</div>
                                <Icon icon="radio-button-on" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Radio</div>
                                <Icon icon="radio" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Recording</div>
                                <Icon icon="recording" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Refresh</div>
                                <Icon icon="refresh" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Repeat</div>
                                <Icon icon="repeat" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Rewind left</div>
                                <Icon icon="rewind-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Rewind right</div>
                                <Icon icon="rewind-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Save</div>
                                <Icon icon="save" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Scissors</div>
                                <Icon icon="scissors" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Search</div>
                                <Icon icon="search" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Settings 2</div>
                                <Icon icon="settings-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Settings</div>
                                <Icon icon="settings" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shake</div>
                                <Icon icon="shake" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Share</div>
                                <Icon icon="share" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shield off</div>
                                <Icon icon="shield-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shield</div>
                                <Icon icon="shield" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shopping bag</div>
                                <Icon icon="shopping-bag" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shopping cart</div>
                                <Icon icon="shopping-cart" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shuffle 2</div>
                                <Icon icon="shuffle-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Shuffle</div>
                                <Icon icon="shuffle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Step backwards</div>
                                <Icon icon="step-backward" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Step forward</div>
                                <Icon icon="step-forward" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Slash</div>
                                <Icon icon="slash" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Smartphone</div>
                                <Icon icon="smartphone" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Smiling face</div>
                                <Icon icon="smiling-face" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Speaker</div>
                                <Icon icon="speaker" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Square</div>
                                <Icon icon="square" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Star</div>
                                <Icon icon="star" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Stop circle</div>
                                <Icon icon="stop-circle" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sun</div>
                                <Icon icon="sun" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Swap</div>
                                <Icon icon="swap" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Sync</div>
                                <Icon icon="sync" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Text</div>
                                <Icon icon="text" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Thermometer minus</div>
                                <Icon icon="thermometer-minus" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Thermometer</div>
                                <Icon icon="thermometer" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Thermometer plus</div>
                                <Icon icon="thermometer-plus" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Toggle left</div>
                                <Icon icon="toggle-left" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Toggle right</div>
                                <Icon icon="toggle-right" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Trash 2</div>
                                <Icon icon="trash-2" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Trash</div>
                                <Icon icon="trash" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Trending down</div>
                                <Icon icon="trending-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Trending up</div>
                                <Icon icon="trending-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Tv</div>
                                <Icon icon="tv" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Twitter</div>
                                <Icon icon="twitter" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Umbrella</div>
                                <Icon icon="umbrella" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Undo</div>
                                <Icon icon="undo" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Unlock</div>
                                <Icon icon="unlock" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Upload</div>
                                <Icon icon="upload" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Video off</div>
                                <Icon icon="video-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Video</div>
                                <Icon icon="video" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Volume down</div>
                                <Icon icon="volume-down" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Volume mute</div>
                                <Icon icon="volume-mute" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Volume off</div>
                                <Icon icon="volume-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Volume up</div>
                                <Icon icon="volume-up" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Wifi off</div>
                                <Icon icon="wifi-off" size={12}/>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content
                                className="d-flex align-items-center justify-content-center flex-direction-column">
                                <div className="card-header-title mb-2">Wifi</div>
                                <Icon icon="wifi" size={12}/>
                            </Card.Content>
                        </Card>
                    </Grid>
                </Row>
            </Container>
        </Page.Content>
    </Page>,
    document.getElementById('root')
);
