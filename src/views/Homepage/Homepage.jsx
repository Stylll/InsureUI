import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header.component';
import Loader from '../../components/Loader/Loader.component';
import * as categoryActions from '../../redux/actionCreators/categoryActions/categoryActions';
import './styles.scss';

const Homepage = ({
  categoryItems, getCategoryItems, isLoading,
}) => {
  useEffect(() => {
    getCategoryItems();
  }, [getCategoryItems]);

  const loaderStyles = {
    width: '20px',
    height: '20px',
  };

  const renderCategoryItems = (categoryList) => {
    if (!categoryList || !categoryList.items.length) {
      return (
        <tr>
          <td className="noItemRecords" colSpan="4">No item records.</td>
        </tr>
      );
    }

    return (
      categoryList.items.map((item, key) => {
        const sn = key + 1;
        return (
          <tr key={key}>
            <td>{sn}</td>
            <td>{item.name}</td>
            <td>${item.value}</td>
            <td>X</td>
          </tr>
        );
      })
    );
  };

  const renderItemsTotal = (total) => {
    if (total > 0) {
      return (
        <tr>
          <td className="categoryTotal" colSpan="4" align="right">Total: ${total}</td>
        </tr>
      );
    }
    return null;
  };

  const renderBody = () => {
    const { categories } = categoryItems;

    if (!categories || !categories.length) {
      return (
        <tbody>
        <tr>
          <td colSpan="4">No category records.</td>
        </tr>
      </tbody>
      );
    }

    return (
      <tbody>
            {categories.map((category, i) => (
                <Fragment key={i}>
                  <tr>
                    <td className="categoryName" colSpan="4">{category.name}</td>
                  </tr>
                  {renderCategoryItems(category)}
                  {renderItemsTotal(category.total)}
                </Fragment>
            ))}
          </tbody>
    );
  };

  const renderTable = () => {
    const { total = 0 } = categoryItems;
    if (!total) {
      return (
        <div>
          <h3>No Records Found.</h3>
        </div>
      );
    }
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Item Name</th>
              <th>Value</th>
              <th />
            </tr>
          </thead>
          {renderBody()}
          <tfoot>
            <tr>
              <td className="totalSum" colSpan="4">Total Sum: ${total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

  return (
    <div className="homepage-container">
      <Header />
      <div className="categories-container">
        <div>
          <h3 className="title">List Of Items</h3>
          {isLoading && <Loader
            customStyles={loaderStyles}
            message="fetching category items records, hang tight..." />}
          {!isLoading && renderTable()}
        </div>
      </div>
    </div>
  );
};

Homepage.propTypes = {
  getCategoryItems: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getCategoryItemsSuccess: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  categoryItems: PropTypes.object.isRequired,
  dataTestId: PropTypes.string,
};

Homepage.defaultProps = {
  dataTestId: 'viewcategoryitems',
};

const mapStateToProps = ({ category }) => ({
  isLoading: category.isCategoryItemsLoading,
  getCategoryItemsSuccess: category.getCategoryItemsSuccess,
  errorMessage: category.getCategoryItemsErrorMessage,
  categoryItems: category.categoryItems,
});

const mapDispatchToProps = {
  getCategoryItems: categoryActions.getCategoryItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
