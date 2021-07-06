import React, { useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
const Guide = ({ nextStep, categories, setModalVals, modalVals }) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [subCategories, setSubCategories] = useState(null);
    const handleNext = () => {
        setModalVals({
            ...modalVals,
            category: selectedCategory,
            subcategory: selectedSubCategory
        });
        nextStep();
    };
    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
        const subc = categories.filter(c => c?.id == parseInt(e.target.value));
        setSubCategories(subc[0]);
    };
    return (
        <>
            <Row className="guide-modal-mainsection">
                <Col sm="12" md="8" lg="6">
                    <FormGroup>
                        <Label>
                            <b>Category</b>
                        </Label>
                        <Input
                            type="select"
                            name="category"
                            className="mb-3"
                            onChange={e => handleCategoryChange(e)}
                        >
                            <option value="none" selected disabled hidden>
                                Select an Category
                            </option>
                            {categories &&
                                categories?.length > 0 &&
                                categories.map(c => (
                                    <option key={c?.id} value={c?.id}>
                                        {c?.name}
                                    </option>
                                ))}
                        </Input>
                        <Input
                            type="select"
                            name="subcategory"
                            onChange={e =>
                                setSelectedSubCategory(e.target.value)
                            }
                        >
                            <option value="none" selected disabled hidden>
                                Select a Sub Category
                            </option>
                            {subCategories &&
                                subCategories?.sub_categories &&
                                subCategories?.sub_categories?.length > 0 &&
                                subCategories?.sub_categories.map(sc => (
                                    <option key={sc?.id} value={sc?.id}>
                                        {sc?.name}
                                    </option>
                                ))}
                            {subCategories &&
                                subCategories?.sub_categories &&
                                subCategories?.sub_categories?.length == 0 && (
                                    <option value="none" disabled>
                                        No sub-category found
                                    </option>
                                )}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
            <div className="modal-footer-btns">
                <button className="skip" onClick={handleNext}>
                    skip
                </button>
                <button className="next" onClick={handleNext}>
                    next
                </button>
            </div>
        </>
    );
};

export default Guide;
