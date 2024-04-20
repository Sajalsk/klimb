import Excel from 'exceljs';
import async from 'async';
import Candidate from '../models/Candidate.js';

const uploadCandidates = async (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    try {
        
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(req.file.path);
        const worksheet = workbook.getWorksheet(1);

        const candidatesData = [];

        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) {
                const candidateData = {
                    name: row.getCell(1).value,
                    email: row.getCell(2).value,
                    mobile: row.getCell(3).value,
                    dob: row.getCell(4).value,
                    experience: row.getCell(5).value,
                    resumeTitle: row.getCell(6).value,
                    currentLocation: row.getCell(7).value,
                    postalAddress: row.getCell(8).value,
                    currentEmployer: row.getCell(9).value,
                    currentDesignation: row.getCell(10).value
                };
                candidatesData.push(candidateData);
            }
        });

        await new Promise((resolve, reject) => {
            async.eachSeries(candidatesData, async (candidateData) => {
                try {
                    const existingCandidate = await Candidate.findOne({ email: candidateData.email });
                    if (existingCandidate) {
                        console.log(`Skipping duplicate record: ${candidateData.email}`);
                    } else {
                        await Candidate.create(candidateData);
                    }
                    
                } catch (error) {
                    console.error('Error creating candidate:', error);
                    reject(error); 
                }
            }, (error) => {
                if (error) {
                    console.error('Error processing candidates:', error);
                    reject(error); 
                } else {
                    resolve(); 
                }
            });
        });

        res.status(200).json({ message: 'Candidates processed successfully.' });
    } catch (error) {
        console.error('Error processing Excel:', error);
        res.status(500).json({ message: 'An error occurred while processing the Excel file.' });
    }
};

export default { uploadCandidates };
