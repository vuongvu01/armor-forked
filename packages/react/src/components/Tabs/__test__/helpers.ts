export const getSelectedTab = (container: HTMLElement) => {
    const selectedTab = container.querySelector('.Tab-Root--active');
    expect(selectedTab).toBeInTheDocument();

    return selectedTab;
};
