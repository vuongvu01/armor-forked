import React, { useState } from 'react';
import styled from 'styled-components';

import * as I from '..';

import { loremIpsum } from '../../../../react/src/helpers/LoremIpsum';

export default {
    title: 'Icons',
    component: I.ArrowUpIcon,
    parameters: {},
};

const Icons = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-bottom: -0.5rem;
    margin-left: -0.5rem;

    & > * {
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }
`;

const Icon = styled.div`
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    box-sizing: border-box;
    height: 3rem;
    width: 3rem;
    background-color: #f7f7f7;
    color: #050505;
`;

export const Basic = () => (
    <>
        <h2>Essentials</h2>
        <Icons>
            <Icon>
                <I.PlusIcon />
            </Icon>
            <Icon>
                <I.MinusIcon />
            </Icon>
            <Icon>
                <I.ArrowUpTailCircleFilledIcon />
            </Icon>
            <Icon>
                <I.AttachmentIcon />
            </Icon>
            <Icon>
                <I.CalendarIcon />
            </Icon>
            <Icon>
                <I.CopyIcon />
            </Icon>
            <Icon>
                <I.DeleteIcon />
            </Icon>
            <Icon>
                <I.DeleteCircleIcon />
            </Icon>
            <Icon>
                <I.EditIcon />
            </Icon>
            <Icon>
                <I.FilterIcon />
            </Icon>
            <Icon>
                <I.FlashIcon />
            </Icon>
            <Icon>
                <I.ForkKnifeIcon />
            </Icon>
            <Icon>
                <I.InfoIcon />
            </Icon>
            <Icon>
                <I.LoginIcon />
            </Icon>
            <Icon>
                <I.LogoutIcon />
            </Icon>
            <Icon>
                <I.MotorcycleDeliveryIcon />
            </Icon>
            <Icon>
                <I.PhoneRingingIcon />
            </Icon>
            <Icon>
                <I.PlayIcon />
            </Icon>
            <Icon>
                <I.SearchIcon />
            </Icon>
            <Icon>
                <I.ShopIcon />
            </Icon>
            <Icon>
                <I.ShuffleIcon />
            </Icon>
            <Icon>
                <I.TimeCircleIcon />
            </Icon>
            <Icon>
                <I.TimeCircleFilledIcon />
            </Icon>
            <Icon>
                <I.UserCircleIcon />
            </Icon>
            <Icon>
                <I.WarningIcon />
            </Icon>
            <Icon>
                <I.TimeSeparatorIcon />
            </Icon>
            <Icon>
                <I.EmailIcon />
            </Icon>
            <Icon>
                <I.PhoneNotificationIcon />
            </Icon>
            <Icon>
                <I.KeyboardArrowNextIcon />
            </Icon>
            <Icon>
                <I.ExpandWindowIcon />
            </Icon>
            <Icon>
                <I.HomeIcon />
            </Icon>
            <Icon>
                <I.SplitIcon />
            </Icon>
            <Icon>
                <I.MergeIcon />
            </Icon>
            <Icon>
                <I.LensIcon />
            </Icon>
            <Icon>
                <I.LensIcon fill="green" />
            </Icon>
            <Icon>
                <I.LensEmptyIcon />
            </Icon>
            <Icon>
                <I.FlagIcon stroke="red" />
            </Icon>
            <Icon>
                <I.PlayCircleFilledIcon stroke="red" />
            </Icon>
            <Icon>
                <I.StarFilledIcon stroke="red" />
            </Icon>
            <Icon>
                <I.StarOutlineIcon stroke="red" />
            </Icon>
        </Icons>
        <h2>Arrow</h2>
        <Icons>
            <Icon>
                <I.ArrowUpIcon />
            </Icon>
            <Icon>
                <I.ArrowRightIcon />
            </Icon>
            <Icon>
                <I.ArrowDownIcon />
            </Icon>
            <Icon>
                <I.ArrowLeftIcon />
            </Icon>
            <Icon>
                <I.ArrowUpTailIcon />
            </Icon>
            <Icon>
                <I.ArrowRightTailIcon />
            </Icon>
            <Icon>
                <I.ArrowDownTailIcon />
            </Icon>
            <Icon>
                <I.ArrowLeftTailIcon />
            </Icon>
            <Icon>
                <I.ArrowReturnRightIcon />
            </Icon>
            <Icon>
                <I.ArrowReturnLeftIcon />
            </Icon>
            <Icon>
                <I.ArrowDownFilledIcon />
            </Icon>
        </Icons>
        <h2>Cancel</h2>
        <Icons>
            <Icon>
                <I.CancelIcon />
            </Icon>
            <Icon>
                <I.CancelCircleIcon />
            </Icon>
            <Icon>
                <I.CancelCircleFilledIcon />
            </Icon>
        </Icons>
        <h2>Emoji</h2>
        <Icons>
            <Icon>
                <I.EmojiDisappointedIcon />
            </Icon>
            <Icon>
                <I.EmojiConfettiIcon />
            </Icon>
        </Icons>
        <h2>Tick</h2>
        <Icons>
            <Icon>
                <I.TickBoxIcon />
            </Icon>
            <Icon>
                <I.TickCircleFilledIcon />
            </Icon>
            <Icon>
                <I.TickDefaultIcon />
            </Icon>
            <Icon>
                <I.TickThickIcon />
            </Icon>
        </Icons>
        <h2>Download</h2>
        <Icons>
            <Icon>
                <I.DownloadIcon />
            </Icon>
        </Icons>
        <h2>Upload</h2>
        <Icons>
            <Icon>
                <I.ImageUploadIcon />
            </Icon>
            <Icon>
                <I.UploadIcon />
            </Icon>
        </Icons>
        <h2>Settings</h2>
        <Icons>
            <Icon>
                <I.CogIcon />
            </Icon>
            <Icon>
                <I.SettingsHumanIcon />
            </Icon>
        </Icons>
        <h2>Text Formatting</h2>
        <Icons>
            <Icon>
                <I.AlignCenterIcon />
            </Icon>
            <Icon>
                <I.AlignLeftIcon />
            </Icon>
            <Icon>
                <I.AlignRightIcon />
            </Icon>
            <Icon>
                <I.LinkIcon />
            </Icon>
            <Icon>
                <I.UnlinkIcon />
            </Icon>
            <Icon>
                <I.ListBulletIcon />
            </Icon>
            <Icon>
                <I.ListNumberIcon />
            </Icon>
            <Icon>
                <I.TextBoldIcon />
            </Icon>
            <Icon>
                <I.TextItalicIcon />
            </Icon>
            <Icon>
                <I.TextUnderlineIcon />
            </Icon>
            <Icon>
                <I.TextStrikeThroughIcon />
            </Icon>
            <Icon>
                <I.ArtboardExpandIcon />
            </Icon>
            <Icon>
                <I.DoubleFileIcon />
            </Icon>
        </Icons>
        <h2>Finance</h2>
        <Icons>
            <Icon>
                <I.CashIcon />
            </Icon>
            <Icon>
                <I.CreditCardIcon />
            </Icon>
            <Icon>
                <I.ReceiptIcon />
            </Icon>
            <Icon>
                <I.WalletIcon />
            </Icon>
        </Icons>
        <h2>Sync</h2>
        <Icons>
            <Icon>
                <I.OneDirectionIcon />
            </Icon>
            <Icon>
                <I.TwoDirectionIcon />
            </Icon>
            <Icon>
                <I.WithClockIcon />
            </Icon>
            <Icon>
                <I.LocationRefreshIcon />
            </Icon>
            <Icon>
                <I.SyncTimeResetIcon />
            </Icon>
        </Icons>
        <h2>Devices</h2>
        <Icons>
            <Icon>
                <I.LaptopIcon />
            </Icon>
            <Icon>
                <I.SmartphoneIcon />
            </Icon>
        </Icons>
        <h2>Folder</h2>
        <Icons>
            <Icon>
                <I.FolderIcon />
            </Icon>
            <Icon>
                <I.FolderStarIcon />
            </Icon>
        </Icons>
        <h2>Chat</h2>
        <Icons>
            <Icon>
                <I.BubbleTextIcon />
            </Icon>
            <Icon>
                <I.ConversationIcon />
            </Icon>
            <Icon>
                <I.QuotationIcon />
            </Icon>
        </Icons>
        <h2>Lock</h2>
        <Icons>
            <Icon>
                <I.LockClosedIcon />
            </Icon>
            <Icon>
                <I.LockOpenIcon />
            </Icon>
        </Icons>
        <h2>Files</h2>
        <Icons>
            <Icon>
                <I.FileCommonTextIcon />
            </Icon>
            <Icon>
                <I.FileImagePortraitIcon />
            </Icon>
            <Icon>
                <I.FilePDFIcon />
            </Icon>
            <Icon>
                <I.FileTaskPinIcon />
            </Icon>
            <Icon>
                <I.ChecklistIcon />
            </Icon>
        </Icons>
        <h2>Sort</h2>
        <Icons>
            <Icon>
                <I.ByLetterIcon />
            </Icon>
            <Icon>
                <I.ByNumberIcon />
            </Icon>
        </Icons>
        <h2>Help</h2>
        <Icons>
            <Icon>
                <I.CustomerSupportIcon />
            </Icon>
            <Icon>
                <I.QuestionChatIcon />
            </Icon>
            <Icon>
                <I.QuestionCircleFilledIcon />
            </Icon>
            <Icon>
                <I.QuestionMarkOutlineIcon />
            </Icon>
        </Icons>
        <h2>Navigation</h2>
        <Icons>
            <Icon>
                <I.EllipsisHorizontalIcon />
            </Icon>
            <Icon>
                <I.EllipsisVerticalIcon />
            </Icon>
            <Icon>
                <I.HamburgerMenuIcon />
            </Icon>
        </Icons>
        <h2>Map</h2>
        <Icons>
            <Icon>
                <I.MapIcon />
            </Icon>
            <Icon>
                <I.PinIcon />
            </Icon>
            <Icon>
                <I.PinMarkerIcon />
            </Icon>
        </Icons>
        <h2>View</h2>
        <Icons>
            <Icon>
                <I.IrisOnIcon />
            </Icon>
            <Icon>
                <I.IrisOffIcon />
            </Icon>
            <Icon>
                <I.IrisScanApprovedIcon />
            </Icon>
        </Icons>
        <h2>Etc</h2>
        <Icons>
            <Icon>
                <I.CsvFileIcon />
            </Icon>
            <Icon>
                <I.FolderStarAlternateIcon />
            </Icon>
            <Icon>
                <I.FileListToDoIcon />
            </Icon>
            <Icon>
                <I.FileTaskListIcon />
            </Icon>
        </Icons>
    </>
);

export const TextEditor = () => {
    const colors = ['#1c5ece', '#02a68e', '#f3b701', '#8bce4f', '#e1444b'];
    const [textColor, setTextColor] = useState('#e1444b');
    return (
        <>
            <p>Pick a color</p>
            <div style={{ display: 'flex' }}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            height: '30px',
                            width: '30px',
                            margin: '12px',
                            background: color,
                            border: textColor === color ? '2px solid blue' : '',
                            boxSizing: 'border-box',
                        }}
                        onClick={() => setTextColor(color)}
                    />
                ))}
            </div>

            <Icon>
                <I.TextColorIcon textColor={textColor} />
            </Icon>
        </>
    );
};

export const InText = () => (
    <>
        <I.ArrowUpIcon />
        {loremIpsum}
        <I.ArrowDownIcon />
        {loremIpsum}
        <I.ArrowRightTailIcon />
    </>
);

export const Sizes = () => {
    return (
        <>
            <div>
                <I.EllipsisHorizontalIcon small />
                <I.EllipsisHorizontalIcon medium />
                <I.EllipsisHorizontalIcon large />
                <I.EllipsisHorizontalIcon />
                Quick brown fox...
            </div>
            <div>
                <I.EllipsisVerticalIcon small />
                <I.EllipsisVerticalIcon medium />
                <I.EllipsisVerticalIcon large />
                <I.EllipsisVerticalIcon />
                Quick brown fox...
            </div>
        </>
    );
};

export const CustomClass = () => {
    return (
        <div>
            <I.AddIcon className="PlusSign" />
        </div>
    );
};
