/**
 * A React component to view a PDF document
 *

 */

import React, { useContext, useState } from 'react';

import AttachmentLoader from '../attachment/AttachmentLoader';
import BookmarkLoader from '../bookmark/BookmarkLoader';
import Button from '../components/Button';
import BookmarkIcon from '../icons/BookmarkIcon';
import FileIcon from '../icons/FileIcon';
import WrappedScrollingIcon from '../icons/WrappedScrollingIcon';
import LocalizationContext from '../localization/LocalizationContext';
import LocalizationMap from '../localization/LocalizationMap';
import Position from '../portal/Position';
import Tooltip from '../portal/Tooltip';
import SpecialZoomLevel from '../SpecialZoomLevel';
import ThemeContext from '../theme/ThemeContext';
import ThumbnailList from '../thumbnail/ThumbnailList';
import classNames from '../utils/classNames';
import PdfJs from '../vendors/PdfJs';
import './sidebar.less';

interface SidebarProps {
    currentPage: number;
    doc: PdfJs.PdfDocument;
    height: number;
    rotation: number;
    width: number;
    onJumpToDest(pageIndex: number, bottomOffset: number, scaleTo: number | SpecialZoomLevel): void;
    onJumpToPage(pageIndex: number): void;
}

enum Tab {
    Attachment = 'Attachment',
    Bookmark = 'Bookmark',
    Thumbnail = 'Thumbnail',
}

const TOOLTIP_OFFSET = { left: 0, top: 8 };

const Sidebar: React.FC<SidebarProps> = ({ currentPage, doc, height, rotation, width, onJumpToDest, onJumpToPage }) => {
    const l10n = useContext(LocalizationContext);
    const theme = useContext(ThemeContext);
    const [tab, setTab] = useState(Tab.Thumbnail);
    const clickThumbnailTab = (): void => setTab(Tab.Thumbnail);
    const clickBookmarkTab = (): void => setTab(Tab.Bookmark);
    const clickAttachmentTab = (): void => setTab(Tab.Attachment);

    const renderAttachmentTip = (): LocalizationMap => l10n.sidebar.attachment;
    const renderBookmarkTip = (): LocalizationMap => l10n.sidebar.bookmark;
    const renderThumbnailTip = (): LocalizationMap => l10n.sidebar.thumbnail;

    return (
        <div className={`${theme.prefixClass}-sidebar`}>
            <div className={`${theme.prefixClass}-sidebar-tabs`}>
                <div className={`${theme.prefixClass}-sidebar-tab`}>
                    <Tooltip
                        position={Position.BottomCenter}
                        target={(
                            <Button onClick={clickThumbnailTab} isSelected={tab === Tab.Thumbnail}>
                                <WrappedScrollingIcon />
                            </Button>
                        )}
                        content={renderThumbnailTip}
                        offset={TOOLTIP_OFFSET}
                    />
                </div>
                <div className={`${theme.prefixClass}-sidebar-tab`}>
                    <Tooltip
                        position={Position.BottomCenter}
                        target={(
                            <Button onClick={clickBookmarkTab} isSelected={tab === Tab.Bookmark}>
                                <BookmarkIcon />
                            </Button>
                        )}
                        content={renderBookmarkTip}
                        offset={TOOLTIP_OFFSET}
                    />
                </div>
                <div className={`${theme.prefixClass}-sidebar-tab`}>
                    <Tooltip
                        position={Position.BottomCenter}
                        target={(
                            <Button onClick={clickAttachmentTab} isSelected={tab === Tab.Attachment}>
                                <FileIcon />
                            </Button>
                        )}
                        content={renderAttachmentTip}
                        offset={TOOLTIP_OFFSET}
                    />
                </div>
            </div>
            <div
                className={
                    classNames({
                        [`${theme.prefixClass}-sidebar-content`]: true,
                        [`${theme.prefixClass}-sidebar-thumbnails`]: tab === Tab.Thumbnail,
                    })
                }
            >
                {
                    tab === Tab.Thumbnail && (
                        <ThumbnailList
                            currentPage={currentPage}
                            doc={doc}
                            pageHeight={height}
                            pageWidth={width}
                            rotation={rotation}
                            onJumpToPage={onJumpToPage}
                        />
                    )
                }
                {
                    tab === Tab.Bookmark && <BookmarkLoader doc={doc} onJumpToDest={onJumpToDest} />
                }
                {
                    tab === Tab.Attachment && <AttachmentLoader doc={doc} />
                }
            </div>
        </div>
    );
};

export default Sidebar;
