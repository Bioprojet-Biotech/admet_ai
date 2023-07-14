"""Download and prepare all the Therapeutics Data Commons (TDC) ADMET datasets."""
from pathlib import Path

import pandas as pd
from tdc.single_pred import ADME, Tox
from tqdm import tqdm

from constants import (
    ADME_DATASET_TO_TYPE,
    DATASET_TO_LABEL_NAMES,
    SMILES_COLUMN,
    TOX_DATASET_TO_TYPE
)


def tdc_admet_all_prepare(
        save_dir: Path
) -> None:
    """Download and prepare all the Therapeutics Data Commons (TDC) ADMET datasets.

    :param save_dir: A directory where the TDC AMDET data will be saved.
    """
    # Map dataset to dataset class
    dataset_to_class = {
        tox_dataset: Tox
        for tox_dataset in TOX_DATASET_TO_TYPE
    } | {
        adme_dataset: ADME
        for adme_dataset in ADME_DATASET_TO_TYPE
    }

    # Create save directory
    save_dir.mkdir(parents=True, exist_ok=True)

    # Load Tox data
    for data_name, data_class in tqdm(dataset_to_class.items(), desc='Datasets'):
        # Get names of labels for dataset (or None if only one label)
        label_names = DATASET_TO_LABEL_NAMES.get(data_name, [None])
        data = []

        # Handle special case for Skin_Reaction dataset name
        if data_name == 'Skin_Reaction':
            tdc_data_name = 'Skin Reaction'
        else:
            tdc_data_name = data_name

        # Get data for each label
        for label_name in tqdm(label_names, desc='Labels'):
            label_data = data_class(name=tdc_data_name, label_name=label_name, path=save_dir).get_data()
            data.append(dict(zip(label_data['Drug'].tolist(), label_data['Y'].tolist())))

        # Get all SMILES
        smiles = sorted(set.union(*[set(smiles_to_target) for smiles_to_target in data]))

        # Rename None label name to dataset name
        if label_names == [None]:
            label_names = [data_name]

        # Create DataFrame with all SMILES and targets
        data = pd.DataFrame({
            SMILES_COLUMN: smiles
        } | {
            label_name: [smiles_to_target.get(smiles, None) for smiles in smiles]
            for label_name, smiles_to_target in zip(label_names, data)
        })

        # Save data
        data.to_csv(save_dir / f'{data_name}.csv', index=False)


if __name__ == '__main__':
    from tap import tapify

    tapify(tdc_admet_all_prepare)