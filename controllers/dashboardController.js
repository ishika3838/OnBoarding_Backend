const { dashboardSummary } = require('../constants');

const getDashboardSummary = async (req, res) => {

    try {
        res.status(200).json({
            message: 'Dashboard summary fetched successfully',
            summary: dashboardSummary,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }

};

module.exports = { getDashboardSummary }
