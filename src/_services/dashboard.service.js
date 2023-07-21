import { axiosUtils, commonUtils } from '../_helpers';
import urlConfig from 'url.config';

export const dashboardService = {
    load,
    fetchFeed
};

async function load(startDate, endDate) {
    const dashboardResponse = await axiosUtils.post(urlConfig.DASHBOARD_PATH, { 'startDate':startDate,'endDate':endDate });
    return dashboardResponse;
}

async function fetchFeed() {
    const feedResponse = await axiosUtils.get(urlConfig.FEED_PATH);
    return feedResponse;
}

