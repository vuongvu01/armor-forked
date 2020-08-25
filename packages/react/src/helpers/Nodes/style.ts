import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    color: #333333;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    width: 100%;
    margin-top: 25px;
    margin-bottom: 40px;
    margin-left: 1px;
    margin-right: 1px;
    font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
        'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue',
        Helvetica, Arial, sans-serif;

    td,
    th {
        vertical-align: top;
    }
`;

export const HeaderTR = styled.tr`
    border: none;
    background: none;

    &:last-child {
        th:first-child {
            border-bottom-left-radius: 4px;
        }
    }
    &:first-child {
        th:first-child {
            border-top-left-radius: 4px;
        }
    }
`;

export const TH = styled.th`
    border: none;
    vertical-align: top;
    color: rgba(51, 51, 51, 0.75);
    padding: 10px 20px;
`;

export const TBody = styled.tbody`
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 1px, rgba(0, 0, 0, 0.065) 0 0 0 1px;
    border-radius: 4px;
`;

export const TR = styled.tr`
    background: transparent;
    overflow: hidden;
    border: none;

    &:not(:first-child) {
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: rgb(230, 230, 230);
    }
`;

export const TD = styled.td`
    padding: 16px 20px;
`;
