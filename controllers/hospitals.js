// @desc Get all hospitals
// @route GET /api/v1/hospitals
// @access Public
exports.getHospitals = (req,res,next) => {
    res.status(200).json({ success: true, message: "Get all hospitals" });
}

// @desc Get single hospital
// @route GET /api/v1/hospitals/:id
// @access Public
exports.getHospital = (req,res,next) => {
    res.status(200).json({ success: true, message: `Get hospital ${req.params.id}` });
}

// @desc Create new hospital
// @route POST /api/v1/hospitals
// @access Private
exports.createHospital = (req,res,next) => {
    res.status(201).json({ success: true, message: "Create a hospital" });
}

// @desc Update single hospital
// @route PUT /api/v1/hospitals/:id
// @access Private
exports.updateHospital = (req,res,next) => {
    res.status(200).json({ success: true, message: `Update hospital ${req.params.id}` });
}

// @desc Delete single hospital
// @route DELETE /api/v1/hospitals/:id
// @access Private
exports.deleteHospital = (req,res,next) => {
    res.status(200).json({ success: true, message: `Delete hospital ${req.params.id}` });
}   

