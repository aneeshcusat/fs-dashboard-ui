import { axiosUtils, commonUtils } from '../_helpers';
import urlConfig from 'url.config';

export const dashboardService = {
    load
};

async function load(startDate, endDate) {
    const dashboardResponse = await axiosUtils.post(urlConfig.DASHBOARD_PATH, { 'startDate':startDate,'endDate':endDate });
    return dashboardResponse;
}