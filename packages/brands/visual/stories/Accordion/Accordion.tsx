import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionHeader,
} from '@deliveryhero/armor';

export default {
    title: 'Accordion',
    component: Accordion,
};

export const Basic = () => (
    <>
        <Accordion>
            <AccordionHeader title="Test" onClick={() => {}} />
            <AccordionContent>Content</AccordionContent>
        </Accordion>
        <Accordion>
            <AccordionHeader title="Test 1" onClick={() => {}} />
            <AccordionContent>Content 1</AccordionContent>
        </Accordion>
        <Accordion>
            <AccordionHeader title="Test 2" onClick={() => {}} />
            <AccordionContent>Content 2</AccordionContent>
        </Accordion>
    </>
);

export const Disabled = () => (
    <Accordion disabled>
        <AccordionHeader title="Test" onClick={() => {}} />
        <AccordionContent>Content</AccordionContent>
    </Accordion>
);

export const ExpandedByDefault = () => (
    <Accordion defaultExpanded>
        <AccordionHeader title="Test" onClick={() => {}} />
        <AccordionContent>Content</AccordionContent>
    </Accordion>
);
