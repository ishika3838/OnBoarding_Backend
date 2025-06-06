const Preference = require('../models/preferenceModel');

const savePreferences = async (req, res) => {
    try {
        const { theme, layout } = req.body;
        const pref = await Preference.findOneAndUpdate(
            { user: req.user.id },
            { theme, layout },
            { upsert: true, new: true }
        );

        res.status(200).json({
            message: 'Preference saved successfully',
            data: { preferences: pref }
        });
    } catch (error) {
        console.error('Error saving preferences:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getPreferences = async (req, res) => {
    try {
        const pref = await Preference.findOne({ user: req.user.id });
        if (!pref) {
            return res.status(404).json({ message: 'Preferences not found' });
        }
        res.status(200).json({
            message: 'Preferences fetched successfully',
            data: { preferences: pref }
        });

    } catch (error) {
        console.error('Error saving preferences:', error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { savePreferences, getPreferences };